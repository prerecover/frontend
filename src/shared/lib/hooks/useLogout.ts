'use client';
import { useCallback } from 'react';

import { setCookie } from './useCookie';

export const useLogout = () => {
    const logout = useCallback(() => {
        setCookie('access_token', '', 0);

        window.location.reload();
    }, []);

    return { logout };
};
