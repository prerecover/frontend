
import AuthContainer from "@/components/ui/authContainer";
import { Text } from "@/components/ui/text";
import { Toaster } from "@/components/ui/toaster";
import { ConfirmationForm } from "@/features/ConfirmationForm";
import { Recovery } from "@/features/RecoverySelect";
import Link from "next/link";

export default function ConfirmationPassword() {
    return (
        <>
            <AuthContainer className="gap-7">
                <Text type="h2" position="center" className="text-[20px] text-center" >Запрос на восстановление</Text>
                <Text type="p" position="center" className="text-[14px] text-grey-700 ">Введите код который был отправлен, для восстановления доступа к аккаунту.</Text>
                <ConfirmationForm type="reset" />
                <div className="flex gap-1 justify-center">
                    <Text type="p" position="center" className="text-[14px] text-grey-700">Уже имеется аккаунт?</Text>
                    <Link href={"/login"}>
                        <Text type="p" position="center" className="text-[14px] text-blue">Войти</Text>
                    </Link>
                </div>
            </AuthContainer >
            <Toaster />
        </>

    )
}
