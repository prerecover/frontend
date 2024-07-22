import AuthWith from "@/components/ui/auth-with";
import Link from "next/link";

export default function AuthWithApple() {
    return (
        <Link href={"/"}>
            <AuthWith img="/assets/apple.svg" text="Войти с помощью Apple" />
        </Link>
    )
}
