import { Dispatch, FC, SetStateAction } from "react";


import { Text } from "@/components/ui/text";

interface ISelectMethodProps {
    isSelect: "tel" | "email"
    setIsSelect: Dispatch<SetStateAction<"tel" | "email">>
}

export const SelectMethodOfRecovery: FC<ISelectMethodProps> = ({
    isSelect,
    setIsSelect,
}) => {
    return (
        <div className="flex justify-center pt-[15px]">

            <div
                className="w-full border-solid border-b-[1px] border-b-grey pb-[15px]"
                onClick={() => setIsSelect("tel")}
                style={
                    isSelect === "tel" ? { borderBottomColor: "#262626" } : {}
                }
            >
                <Text type="p" color="#414141" className="text-[20px] text-[#414141] w-max my-auto mx-auto cursor-pointer">
                    Тел. Номер
                </Text>
            </div>
            <div
                className="w-full border-solid border-b-[1px] border-b-grey pb-[15px]"
                style={
                    isSelect === "email" ? { borderBottomColor: "#262626" } : {}
                }
                onClick={() => setIsSelect("email")}
            >
                <Text type="p" color="#414141" className="text-[20px] text-[#414141] w-max my-0 mx-auto cursor-pointer">
                    Эл. Почта
                </Text>
            </div>
        </div>
    );
};

