"use client"
import { FC, useState } from "react";
import { SelectMethodOfRecovery } from "./select";
import { RecoveryByNumber } from "./RecoveryByNumber";
import { RecoveryByEmail } from "./RecoveryByEmail";


export const Recovery: FC = () => {
    const [isSelect, setIsSelect] = useState<"tel" | "email">("tel");

    return (
        <>
            <div className="grid gap-5">
                <SelectMethodOfRecovery
                    isSelect={isSelect}
                    setIsSelect={setIsSelect}
                />
                {isSelect === "tel" ? <RecoveryByNumber /> : <RecoveryByEmail />}
            </div>
        </>
    );
};
