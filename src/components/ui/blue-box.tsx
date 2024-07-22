import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";

export default function BlueBox({
    children,
    style,
    className
}: {
    children: ReactNode,
    style?: CSSProperties,
    className?: string
}) {
    return (
        <div className={cn(className, "border-[1px] border-solid border-blue-100 rounded-[12px] p-4 mobile:p-3")} style={style}>
            {children}
        </div>
    )
}
