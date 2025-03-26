import React from "react";
import { Models } from "node-appwrite";
import Thumbnail from "@/components/Thumbnail";
import FormattedDateTime from "@/components/FormattedDateTime";
import { convertFileSize } from "@/lib/utils";
import { formatDateTime } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ShareProps {
  file: Models.Document;
  onInputChange: React.Dispatch<React.SetStateAction<string[]>>;
  onRemove: (email: string) => void;
}

const ImageThumbnail = ({ file }: { file: Models.Document }) => (
  <div className={"file-details-thumbnail mt-2"}>
    <Thumbnail type={file.type} extension={file.extension} url={file.url} />
    <div className={"flex flex-col"}>
      <p className={"sub2 mb-1 text-left"}>{file.name}</p>
      <p className={"caption text-left"}>{convertFileSize(file.size)}</p>
      <FormattedDateTime
        date={file.$createdAt}
        className={"caption text-left"}
      />
    </div>
  </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className={"flex items-center"}>
    <p className={"file-details-label text-left"}>{label}</p>
    <p className={"file-details-value text-left"}>{value}</p>
  </div>
);

export const FileDetails = ({ file }: { file: Models.Document }) => {
  return (
    <>
      <ImageThumbnail file={file} />
      <div className={`space-y-2 px-2 pt-2`}>
        <DetailRow label={"Format:"} value={file.extension} />
        <DetailRow label={"Size:"} value={convertFileSize(file.size)} />
        <DetailRow label={"Owner:"} value={file.owner.fullName} />
        <DetailRow
          label={"Last edit:"}
          value={formatDateTime(file.$updatedAt)}
        />
      </div>
    </>
  );
};

export const ShareInput = ({ file, onInputChange, onRemove }: ShareProps) => {
  return (
    <>
      <ImageThumbnail file={file} />

      <div className={"share-wrapper"}>
        <p className={"sub2 pl-1 text-light-100 mb-1"}>
          Share file with other users
        </p>
        <Input
          type={"email"}
          placeholder={"Enter email address"}
          onChange={(e) => onInputChange(e.target.value.trim().split(","))}
          className={"share-input-field"}
        />
        <div className={"pt-4"}>
          <div className={"flex justify-between"}>
            <p className={"sub2 text-light-100"}>Shared with</p>
            <p className={"sub2 text-light-200"}>{file.users.length} users</p>
          </div>

          <ul className={"pt-2"}>
            {file.users.map((email: string) => (
              <li
                key={email}
                className={"flex items-center justify-between gap-2"}
              >
                <p className={"sub2"}>{email}</p>
                <Button
                  onClick={() => onRemove(email)}
                  className={"share-remove-user"}
                >
                  <Image
                    src={"/assets/icons/remove.svg"}
                    alt={"Remove"}
                    width={24}
                    height={24}
                    className={"remove-icon cursor-pointer"}
                  />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
