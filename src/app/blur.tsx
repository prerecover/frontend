'use client';

import { cn } from '@/lib/utils';
import { useBlurStore } from '@/shared/store/blurStore';

export default function Blur() {
    const { blur } = useBlurStore();
    return <div className={cn(blur && 'fixed top-0 z-[150] bg-dark opacity-55 w-full h-full')} />;
}
