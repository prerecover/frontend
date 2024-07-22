import AuthWith from "@/components/ui/auth-with";
import Link from "next/link";

export default function AuthWithGoogle() {
    return (
        <Link href={"/"}>
        <AuthWith img="/assets/google.svg" text="Войти с помощью Google" />
        </Link>

    )
}
