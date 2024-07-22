import { ChangeEvent, FC, useState } from "react";

import ShowPassword from "@/features/ShowPassword";

interface PasswordInputFieldProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
}

export const PasswordInputField: FC<PasswordInputFieldProps> = ({
    onChange,
}) => {
    const [isShow, setIsShow] = useState(false);

    const handleClick = () => setIsShow((prev) => !prev);

    return (
        <>

            <div className="w-full py-4 pr-5 pl-6 border-[1px] border-blue-100 rounded-[8px] bg-[#fff] flex justify-between">
                <input
                    type={isShow ? "text" : "password"}
                    className="placeholder:text-[14px] placeholder:font-normal placeholder:text-grey"
                    placeholder="Введите пароль"
                    onChange={onChange}
                />
                <ShowPassword isShow={isShow} onClick={handleClick} />
            </div >
        </>
    );
};

