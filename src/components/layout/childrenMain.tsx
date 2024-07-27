'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function ChildrenMain({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const blockLocation = ['/', '/search', '/messages', '/account'];
    return (
        <>
            <div
                className={cn(
                    'w-full  p-4 overflow-y-auto flex flex-col flex-grow pt-[81px] overflow-x-hidden mobile:pb-[81px] layout-1024:pl-[116px] closed_sidebar:pl-[272px]',
                    !blockLocation.includes(pathname) && 'bg-white',
                )}>
                {children}
            </div>
        </>
    );
}
