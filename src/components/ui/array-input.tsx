import Image from "next/image";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { Text } from "./text";
import { Input } from "./input";

export type ReactSetState = React.Dispatch<React.SetStateAction<any[]>>;
export type HookFormSetState = UseFormSetValue<any>;

export default function ArrayInput({ reactSetState, formSetState }: {
    reactSetState?: ReactSetState;
    formSetState?: HookFormSetState;

}) {
    const currIndex = []
    const [numbers, setNumbers] = useState<string[]>([])
    const changeNumbersState = (index: number, value: string) => {
        const newState = [...numbers];
        newState[index] = value;
        if (reactSetState) {
            reactSetState(newState)
        } else if (formSetState) {
            formSetState('numbers', newState)

        }
    };
    return (
        <div className="flex-between h-[56px] border-blue-100 border-[1px] rounded-[12px] py-4 pr-5 pl-6">
            {numbers.length == 0 ? <Text className="text-grey text-[14px]">Телефоны клиники</Text> : (
                <div className="flex gap-4">
                    {numbers.map((_, i) => (
                        <Input className="h-[39px] bg-blue-100 min-w-[128px] max-w-[160px]" onChange={(e) => changeNumbersState(i, e.currentTarget.value)} />
                    ))}
                </div>
            )}



            <Image src={'/assets/blue-plus.svg'} width={24} height={24} alt="add number" className='cursor-pointer' onClick={() => setNumbers([...numbers, ""])} />
        </div>
    )
}