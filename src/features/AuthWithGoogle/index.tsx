import AuthWith from "@/components/ui/auth-with";
import Link from "next/link";
import googleImg from "/public/assets/google.svg"

export default function AuthWithGoogle() {
    return (
        <Link href={"/"}>
            <AuthWith img={googleImg} text="Войти с помощью Google" />
        </Link>

    )
}
