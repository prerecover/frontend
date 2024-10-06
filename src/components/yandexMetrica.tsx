'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function YandexMetrika() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = `${pathname}?${searchParams}`;
        //@ts-expect-error- metrica
        ym(98492264, 'hit', url);
    }, [pathname, searchParams]);

    return null;
}
