import { useCallback } from "react";

import { useCookie } from "./useCookie";
import { INITIAL_USER, useAuth } from "@/app/(auth)/auth-wrapper";
import { useRouter } from "next/navigation";

export const useLogout = () => {
    const { removeCookie } = useCookie();
    const { setUser, setIsAuth } = useAuth();
    const router = useRouter();

    const logout = useCallback(() => {
        removeCookie("access_token");
        router.replace("/login");
        setIsAuth(false);
        setUser(INITIAL_USER);
    }, []);

    return { logout };
};
