import { FC, MouseEventHandler } from 'react';
import { useSidebarStore } from '@/shared/store/sidebarStore';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import styles from './menuItem.module.scss';

type Props = {
    href: string;
    icon: JSX.Element;
    title: string;
    onClick?: MouseEventHandler;
    className?: string;
};

export const MenuItem: FC<Props> = ({ className, href, icon, title, onClick }) => {
    const pathname = usePathname();
    const { isOpenSidebar } = useSidebarStore();
    return (
        <>
            <Link
                className={cn(
                    className,
                    'flex items-center gap-4 text-[14px] font-normal p-[14px]  rounded-[12px] bg-white text-grey w-full transition-all duration-200 ease-in hover:text-dark',
                    styles.wrapper,
                    pathname === href && styles.active,
                    !isOpenSidebar && 'w-[52px] h-[52px]',
                )}
                href={href}
                onClick={onClick}>
                {icon}
                <span
                    className={cn(
                        'overflow-hidden whitespace-normal text-ellipsis',
                        !isOpenSidebar && 'w-0 overflow-hidden',
                    )}>
                    {' '}
                    {title}
                </span>
            </Link>
        </>
    );
};
