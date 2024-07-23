import { FC, useEffect, useState } from "react";
import { Text } from "./text";
import { cn } from "@/lib/utils";
import { gql, useMutation } from "@apollo/client";
import { useResetPasswordStore } from "@/shared/store/resetPasswordStore";


const RECOVERY_BY_EMAIL = gql(`
        mutation ForgotPassword($email: String){
            forgotPassword(forgotPasswordInput: {email: $email})
    }
`)
const RECOVERY_BY_NUMBER = gql(`
        mutation ForgotPassword($number: String){
            forgotPassword(forgotPasswordInput: {number: $number})
    }
`)
export const Timer: FC = () => {
    const [seconds, setSeconds] = useState(60);
    const { email, number } = useResetPasswordStore()
    const [mutate, { data, error }] = useMutation(number.length > 0 ? RECOVERY_BY_NUMBER : RECOVERY_BY_EMAIL)

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [seconds]);

    return (
        <>
            {seconds === 0 ? (
                <Text
                    type="p"
                    fw={400}
                    position="center"
                    className={"cursor-pointer text-[14px] underline underline-offset-4"}
                    onClick={() => mutate({ variables: { email: email.length > 0 && email, number: number.length > 0 && number } })}
                >Выслать код повторно</Text>
            ) : seconds === 60 ? (
                <Text type="p" position="center" className="text-[20px] text-[#262626]" fw={400}>
                    1:00
                </Text>
            ) : (
                <Text type="p" position="center" className="text-[20px] text-[#262626]" fw={400}>
                    {`00:${seconds < 10 ? `0${seconds}` : seconds}`}
                </Text>
            )}
        </>
    );
};

