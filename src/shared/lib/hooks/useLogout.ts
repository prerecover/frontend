'use client';
import { useCallback } from 'react';

import { setCookie } from './useCookie';
import { INITIAL_USER, useAuth } from '@/app/(auth)/auth-wrapper';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
    const { setUser, setIsAuth } = useAuth();
    const router = useRouter();

    const logout = useCallback(() => {
        setCookie('access_token', '', 0);
        setIsAuth(false);
        setUser(INITIAL_USER);
        window.location.reload();
    }, []);

    return { logout };
};
