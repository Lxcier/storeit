import React from "react";
import Image from "next/image";

import Logo from "@/public/assets/icons/logo-full.svg";
import LogoBrand from "@/public/assets/icons/logo-full-brand.svg";
import Illustration from "@/public/assets/images/files.png";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={"flex min-h-screen"}>
      <section
        className={
          "bg-brand p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5"
        }
      >
        <div
          className={
            "flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12"
          }
        >
          <Link href={"/"}>
            <Image
              src={Logo}
              alt={"Logo"}
              width={224}
              height={84}
              className={"h-auto"}
            />
          </Link>
          <div className={"space-y-5 text-white"}>
            <h1 className={"h1"}>Manage your files the best way</h1>
            <p className={"body-1"}>
              This is a place where you can store all your documents
            </p>
          </div>

          <Image
            src={Illustration}
            alt={"Files"}
            className={"transition-all hover:rotate-2 hover:scale-105"}
            width={342}
            height={342}
          />
        </div>
      </section>

      <section
        className={
          "flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0"
        }
      >
        <div className={"mb-16 lg:hidden"}>
          <Link href={"/"}>
            <Image
              src={LogoBrand}
              alt={"Logo"}
              width={224}
              height={82}
              className={"h-auto w-[200px] lg:w-[250px]"}
            />
          </Link>
        </div>
        {children}
      </section>
    </div>
  );
};
export default Layout;
