"use client";

import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { avatarPlaceholderUrl, navItems } from "@/constants";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FileUploader from "@/components/FileUploader";
import { signOutUser } from "@/lib/actions/user.actions";

interface Props {
  $id: string;
  avatar: string;
  fullName: string;
  accountId: string;
  email: string;
}

const MobileNavigation = ({
  $id: ownerId,
  avatar,
  fullName,
  accountId,
  email,
}: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={"mobile-header"}>
        <Image
          src={"/assets/icons/logo-full-brand.svg"}
          alt={"logo"}
          width={120}
          height={52}
          className={"h-auto"}
        />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={"cursor-pointer text-brand hover:underline text-left"}
          >
            <Image
              src={"/assets/icons/menu.svg"}
              alt={"Search"}
              width={30}
              height={30}
            />
          </SheetTrigger>
          <SheetContent className={"shad-sheet h-screen px-3"}>
            <SheetHeader>
              <SheetTitle>
                <div className={"header-user"}>
                  <Image
                    src={avatarPlaceholderUrl}
                    alt={avatar}
                    width={44}
                    height={44}
                    className={"header-user-avatar"}
                  />
                  <div className={"sm:hidden lg:block"}>
                    <p className={"sub2 capitalize"}>{fullName}</p>
                    <p className={"caption"}>{email}</p>
                  </div>
                </div>
                <Separator className={"mb-4 bg-light-200/20"} />
              </SheetTitle>

              <nav className={"mobile-nav"}>
                <ul className={"mobile-nav-list"}>
                  {navItems.map(({ url, name, icon }) => (
                    <Link key={name} href={url} className={"w-full"}>
                      <li
                        className={cn(
                          "mobile-nav-item",
                          pathname === url && "shad-active",
                        )}
                      >
                        <Image src={icon} alt={name} width={24} height={24} />
                        <p>{name}</p>
                      </li>
                    </Link>
                  ))}
                </ul>
              </nav>
              <Separator className={"my-5 bg-light-200/20"} />
              <div className={"flex flex-col justify-between gap-5 pb-5"}>
                <FileUploader ownerId={ownerId} accountId={accountId} />

                <button
                  type={"submit"}
                  className={"mobile-sign-out-button"}
                  onClick={async () => await signOutUser()}
                >
                  <Image
                    src={"/assets/icons/logout.svg"}
                    alt={"logout"}
                    width={24}
                    height={24}
                  />
                  <p>Logout</p>
                </button>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </header>
    </>
  );
};
export default MobileNavigation;
