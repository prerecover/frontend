'use client';
import { useCallback } from 'react';

import { setCookie } from './useCookie';
import { useRouter } from 'next/navigation';

export const useLogout = () => {
    const router = useRouter();
    const logout = useCallback(() => {
        setCookie('access_token', '', 0);
        window.location.reload();
        router.push('/login');
    }, [router]);

    return { logout };
};
