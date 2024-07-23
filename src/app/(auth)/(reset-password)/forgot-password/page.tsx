import AuthContainer from "@/components/ui/authContainer";
import { Text } from "@/components/ui/text";
import { Toaster } from "@/components/ui/toaster";
import { Recovery } from "@/features/RecoverySelect";

export default function ForgotPassword() {
    return (
        <>
            <AuthContainer className="">
                <Text type="h2" position="center" className="text-[20px] text-center" >Восстановление пароля</Text>
                <Text type="h2" position="center" className="mt-8">Не удается выполнить вход</Text>
                <Text type="p" position="center" className="text-[14px] mt-[10px]">Введите телефонный номер или электронную почту и мы отправим вам код для восстановления доступа к аккаунту.</Text>
                <Recovery/>
            </AuthContainer >
            <Toaster />
        </>

    )
}
