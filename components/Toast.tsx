"use client";

import { toast } from "sonner";

import { Button } from "./ui/button";

export const Toast = () => {
  return (
    <Button
      variant={"outline"}
      onClick={() => {
        toast("Nome do arquivo", {
          description: (
            <p className="text-brand text-center">
              <span className="font-semibold">Nome do arquivo</span> excede o
              tamanho máximo 50MB
            </p>
          ),
          className: "bg-red rounded-[10px]",
        });
      }}
    >
      Add to calendar
    </Button>
  );
};
