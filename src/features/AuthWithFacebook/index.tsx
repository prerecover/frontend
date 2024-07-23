import AuthWith from "@/components/ui/auth-with";
import Link from "next/link";

import facebookImg from "/public/assets/facebook.svg"
export default function AuthWithFacebook() {
    return (
        <Link href={"/"}>
            <AuthWith img={facebookImg} text="Войти с помощью Facebook" />
        </Link>
    )
}
