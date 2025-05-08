import { cn } from "@/lib/utils";
import { PropsWithClassName } from "@/shared/types";
import { FC, PropsWithChildren } from "react";

export const ConfirmModalContent: FC<PropsWithChildren<PropsWithClassName>> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
};
