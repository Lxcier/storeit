import { toast } from "sonner";

import { Button } from "./ui/button";

export const Toast = () => {
  return (
    <Button
      variant={"outline"}
      onClick={() => {
        toast("Upload Concluído!", {
          description: `Upload do arquivo concluído com sucesso.`,
          action: {
            label: "Desfazer",
            onClick: () => {
              console.log("Faz algo");
            },
          },
        });
      }}
    >
      Add to calendar
    </Button>
  );
};
