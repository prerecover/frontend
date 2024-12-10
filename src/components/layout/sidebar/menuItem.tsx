import { FC, MouseEventHandler, useState } from 'react';
import { useSidebarStore } from '@/shared/store/sidebarStore';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import styles from './menuItem.module.scss';
import Image from 'next/image';

type Props = {
    href: string;
    icon: JSX.Element;
    title: string;
    onClick?: MouseEventHandler;
    className?: string;
};

export const MenuItem: FC<Props> = ({ className, href, icon, title, onClick }) => {
    const pathname = usePathname();
    const [showAdminClinicsBlock, setShow] = useState(false);
    const { isOpenSidebar } = useSidebarStore();
    return (
        <>
            <Link
                className={cn(
                    className,
                    'flex-between gap-4 text-[14px] font-normal p-[14px]  rounded-[12px] bg-white text-grey w-full transition-all duration-200 ease-in hover:text-dark',
                    styles.wrapper,
                    pathname === href && styles.active,
                    !isOpenSidebar && 'w-[52px] h-[52px]',
                )}
                href={href}
                onMouseLeave={() => setShow(false)}
                onMouseEnter={() => setShow(true)}
                onClick={onClick}>
                <div className='flex gap-4'>
                    {icon}
                    <span
                        className={cn(
                            'overflow-hidden whitespace-normal text-ellipsis',
                            !isOpenSidebar && 'w-0 overflow-hidden',
                        )}>
                        {' '}
                        {title}
                    </span>
                </div>
                {href === '/admin/clinics' && (
                    <>
                        <Image
                            src={'/assets/arrow-right.svg'}
                            width={20}
                            height={20}
                            alt='go to'
                            className='opacity-25'
                        />
                    </>
                )}
            </Link>
            <div
                onMouseLeave={() => setShow(false)}
                onMouseEnter={() => setShow(true)}
                className={cn(
                    showAdminClinicsBlock && title == 'Клиники'
                        ? 'flex absolute w-[240px] h-auto pl-[255px] bg-white left-60 top-[135px] flex-col py-4 px-12 gap-8 '
                        : 'hidden',
                )}>
                <Link href={'/admin/registration'} className='hover:text-blue text-[16px]'>
                    Регистрация
                </Link>
                <Link href={'/admin/clinics'} className='hover:text-blue'>
                    Клиники
                </Link>
            </div>
        </>
    );
};
