import { ReactNode } from "react";
import WhiteContentBlock from "./whiteContentBlock";

export default function AuthContainer({
    children,
}: {
    children: ReactNode
}) {
    return (
        <div className="w-full h-dvh flex-center" >
            <WhiteContentBlock className="w-[460px] pt-[30px] px-[20px] pb-[20px] not_found:w-full not_found:h-dvh not_found:justify-center flex flex-col gap-[24px]">
                {children}
            </WhiteContentBlock>
        </div >
    )
}
