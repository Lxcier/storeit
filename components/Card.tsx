import React from "react";
import { Models } from "node-appwrite";
import Link from "next/link";
import Thumbnail from "@/components/Thumbnail";
import { convertFileSize } from "@/lib/utils";
import FormattedDateTime from "@/components/FormattedDateTime";
import ActionDropdown from "@/components/ActionDropdown";

const Card = ({ file }: { file: Models.Document }) => {
  return (
    <Link href={file.url} target={"_blank"} className={"file-card"}>
      <div className={"flex justify-between"}>
        <Thumbnail
          type={file.type}
          extension={file.extension}
          url={file.url}
          className={"!size-20"}
        />

        <div className={"flex flex-col items-end justify-between"}>
          <ActionDropdown file={file} />
          <p className={"body-1"}>{convertFileSize(file.size)}</p>
        </div>
      </div>

      <div className={"file-card-details"}>
        <p className={"sub2 line-clamp-1"}>
          {file.name.length > 25
            ? `${file.name.slice(0, 22)}...${file.extension}`
            : file.name}
        </p>
        <FormattedDateTime
          date={file.$createdAt}
          className={"body-2 text-light-100"}
        />
        <p className={"caption line-clamp-1 text-light-100"}>
          By: <b>{file.owner.fullName}</b>
        </p>
      </div>
    </Link>
  );
};
export default Card;
