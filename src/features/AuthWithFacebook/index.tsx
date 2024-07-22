import AuthWith from "@/components/ui/auth-with";
import Link from "next/link";

export default function AuthWithFacebook() {
    return (
        <Link href={"/"}>
            <AuthWith img="/assets/facebook.svg" text="Войти с помощью Facebook" />
        </Link>
    )
}
