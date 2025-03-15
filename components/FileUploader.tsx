"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { cn, convertFileToUrl, getFileType } from "@/lib/utils";
import Image from "next/image";
import Thumbnail from "@/components/Thumbnail";
import { MAX_FILE_SIZE } from "@/constants";
import { toast } from "sonner";
import { Toast } from "./Toast";

interface Props {
  ownerId: string;
  accountId: string;
  className?: string; // Optional prop for custom class names
}

const FileUploader = ({ ownerId, accountId, className }: Props) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);

    const uploadPromises = acceptedFiles.map(async (file) => {
      if (file.size > MAX_FILE_SIZE) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setFiles((prevFiles) => prevFiles.filter((f) => f.name !== file.name));

        return toast("Upload Concluído!", {
          description: <p className="body-2"></p>,
          action: {
            label: "Desfazer",
            onClick: () => {
              console.log("Faz algo");
            },
          },
        });
      }
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleRemoveFile = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    fileName: string
  ) => {
    e.stopPropagation();
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <>
      <Toast />
      <div {...getRootProps()} className={"cursor-pointer"}>
        <input {...getInputProps()} />
        <Button type={"button"} className={cn("uploader-button", className)}>
          <Image
            src={"/assets/icons/upload.svg"}
            alt={"Upload"}
            width={24}
            height={24}
          />
          <p>Upload</p>
        </Button>
        {files.length > 0 && (
          <ul className={"uploader-preview-list"}>
            <h4 className={"h4 text-light-100"}>Uploading</h4>

            {files.map((file, index) => {
              const { type, extension } = getFileType(file.name);

              return (
                <li
                  key={`${file.name}-${index}`}
                  className={"uploader-preview-item"}
                >
                  <div className={"flex items-center gap-3 w-full"}>
                    <Thumbnail
                      type={type}
                      extension={extension}
                      url={convertFileToUrl(file)}
                      className={"thumbnail"}
                    />
                    <div className={"flex items-center justify-between w-full"}>
                      <div className={"preview-item-name"}>
                        {file.name}
                        <Image
                          src={"/assets/icons/file-loader.gif"}
                          alt={"loader"}
                          width={80}
                          height={26}
                          unoptimized
                        />
                      </div>
                      <Image
                        src={"/assets/icons/remove.svg"}
                        alt={"remove"}
                        width={24}
                        height={24}
                        onClick={(e) => handleRemoveFile(e, file.name)}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};
export default FileUploader;
