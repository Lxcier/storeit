import Link from "next/link";

export default function Home() {
  return (
    <div className={"flex-center flex-col gap-5 h-screen"}>
      <h1 className={"h1 text-brand"}>
        StoreIt - The only storage solution you need
      </h1>

      <div className={`flex space-x-4`}>
        <Link href={"/sign-in"} className={"log-btn"}>
          Sign In
        </Link>
        <Link
          href={"/sign-up"}
          className={
            "log-btn !bg-transparent hover:!bg-brand !text-brand hover:!text-white"
          }
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
