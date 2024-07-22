import AuthContainer from "@/components/ui/authContainer";
import Line from "@/components/ui/line";
import { Text } from "@/components/ui/text";
import AuthWithApple from "@/features/AuthWithApple";
import AuthWithFacebook from "@/features/AuthWithFacebook";
import AuthWithGoogle from "@/features/AuthWithGoogle";
import { UserLogin } from "@/features/UserLogin";

export default async function Login() {
    return (
        <AuthContainer>
            <Text type="h2" position="center" className="text-[20px] text-center" >Вход</Text>
            <UserLogin />
            <div className="flex-center gap-5">
                <Line color="#D6E7FF" />
                <Text type="p" color="#D6E7FF" className="text-grey text-[14px]">
                    Или
                </Text>
                <Line color="#D6E7FF" />
            </div>
            <div className="grid gap-4">
                <AuthWithGoogle />
                <AuthWithApple />
                <AuthWithFacebook />
            </div>
        </AuthContainer >

    )
}
