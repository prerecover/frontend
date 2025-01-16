import { UseFormSetValue } from "react-hook-form";
import { Input } from "./input";
import { Text } from "./text";
import { useEffect, useState } from "react";

export type ReactSetState = React.Dispatch<React.SetStateAction<number>>;
export type HookFormSetState = UseFormSetValue<any>;
export function PriceDiaposonInput({ reactSetState, formSetState, pricePos }: {
    pricePos: 'min' | 'max' | 'strict';
    reactSetState?: ReactSetState;
    formSetState?: HookFormSetState;

}) {
    const setPrice = (val: string) => {
        if (reactSetState) {
            reactSetState(val)
        } else if (formSetState) {
            if (pricePos == 'max') {
                formSetState('priceMax', val)
            } else {
                formSetState('priceMin', val)
            }
        }
    }


    return (
        <div className="flex items-center">
            <div className="rounded-[12px] border border-solid border-blue-200 flex items-center h-full">
                <Input className="border-none" placeholder="00" onChange={(e) => setPrice(parseInt(e.currentTarget.value))} />
                <Text className="text-[14px] p-5">UZS</Text>
            </div>
        </div>
    )
}