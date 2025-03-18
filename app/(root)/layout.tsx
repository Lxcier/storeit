import React from "react";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import { Toaster } from "sonner";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/sign-in");
  return (
    <main className={"flex h-screen "}>
      <Sidebar {...currentUser} />
      <section className={"flex flex-col h-full flex-1"}>
        <MobileNavigation {...currentUser} />
        <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        <div className={"main-content remove-scrollbar"}>{children}</div>
        <Toaster />
      </section>
    </main>
  );
};
export default Layout;
