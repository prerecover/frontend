import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";

export default function WhiteContentBlock({
    children,
    className,
}: {
    children: ReactNode
    style?: CSSProperties
    className?: string
}) {
    return (
        <div className={cn(className, "bg-white border-[1px] border-solid border-blue-100 rounded-[12px]")} >
            {children}
        </div >
    )
}
