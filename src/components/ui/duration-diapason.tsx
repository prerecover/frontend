import { UseFormSetValue } from "react-hook-form";
import { Input } from "./input";
import { Text } from "./text";
import { useEffect, useState } from "react";

export type ReactSetState = React.Dispatch<React.SetStateAction<number>>;
export type HookFormSetState = UseFormSetValue<any>;
export function DurationDiapasonInput({ reactSetState, formSetState, durationPos }: {
    durationPos: 'min' | 'max' | 'strict';
    reactSetState?: ReactSetState;
    formSetState?: HookFormSetState;

}) {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    useEffect(() => {
        const sum = hours * 60 + minutes
        if (reactSetState) {
            reactSetState(sum)
        } else if (formSetState) {
            if (durationPos == 'max') {
                formSetState('durationMax', sum)
            } else {
                formSetState('durationMin', sum)
            }
        }
    }, [hours, minutes])


    return (
        <div className="flex items-center">
            <div className="rounded-[12px] border border-solid border-blue-200 flex items-center h-full">
                <div className="flex border-r-blue-200 border-r-[1px]">
                    <Input className="border-none" placeholder="00" onChange={(e) => setHours(parseInt(e.currentTarget.value))} />
                    <Text className="text-[14px] p-5">часов</Text>
                </div>
                <div className="flex">
                    <Input className="border-none" placeholder="00" onChange={(e) => setMinutes(parseInt(e.currentTarget.value))} />
                    <Text className="text-[14px] p-5">минут</Text>
                </div>
            </div>
        </div>
    )
}