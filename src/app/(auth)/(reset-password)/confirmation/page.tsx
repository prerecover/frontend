
import AuthContainer from "@/components/ui/authContainer";
import { Text } from "@/components/ui/text";
import { Toaster } from "@/components/ui/toaster";
import { Recovery } from "@/features/RecoverySelect";

export default function ConfirmationPassword() {
    return (
        <>
            <AuthContainer className="">
                <Text type="h2" position="center" className="text-[20px] text-center" >Запрос на восстановление</Text>
                <Text type="p" position="center" className="text-[14px] mt-[25px]">Введите код который был отправлен, для восстановления доступа к аккаунту.</Text>
            </AuthContainer >
            <Toaster />
        </>

    )
}
