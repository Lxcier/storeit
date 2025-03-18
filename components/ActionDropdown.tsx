"use client";

import { Dialog } from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
import Image from "next/image";
import { dropdownItems } from "@/constants";
import { Separator } from "@/components/ui/separator";

const ActionDropdown = ({ file }: { file: File }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
      <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
        <DropdownMenuTrigger className={"shad-no-focus"}>
          <Image
            src={"/assets/icons/dots.svg"}
            alt={"Dropdown Menu"}
            width={24}
            height={24}
            className={"cursor-pointer"}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div className={"py-[22px] px-[26px] pb-[20px]"}>
            <DropdownMenuLabel className={"h3 font-semibold mb-[10px]"}>
              {file.name.length > 24
                ? `${file.name.slice(0, 20)}...${file.extension}`
                : file.name}
            </DropdownMenuLabel>
            <ul className={"space-y-[10px]"}>
              {dropdownItems.map(({ icon, label, separator }, index) => (
                <li key={label}>
                  <DropdownMenuItem className={"rounded-[20px]"}>
                    <Image src={icon} alt={label} width={30} height={30} />
                    {label}
                  </DropdownMenuItem>
                  {index !== dropdownItems.length - 1 && <Separator />}
                </li>
              ))}
            </ul>
          </div>
          ;
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  );
};

export default ActionDropdown;
