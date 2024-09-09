import { FC, MouseEventHandler, useState } from 'react';
import { useSidebarStore } from '@/shared/store/sidebarStore';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import styles from './menuItem.module.scss';
import Image from 'next/image';
import { Text } from '@/components/ui/text';

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
    const [showAdminBlock, setShowAdminBlock] = useState(false);
    const router = useRouter();
    return (
        <>
            <Link
                onMouseEnter={() => setShowAdminBlock(true)}
                onMouseLeave={() => setShowAdminBlock(false)}
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
                {title == 'Администратор' && (
                    <Image src={'/assets/arrow-right.svg'} alt='go to' width={15} height={15} />
                )}
            </Link>
            <div
                onMouseEnter={() => setShowAdminBlock(true)}
                onMouseLeave={() => setShowAdminBlock(false)}
                className={cn(
                    showAdminBlock && title == 'Администратор'
                        ? `flex flex-col gap-[5px] items-center pl-[32px] absolute left-60 bg-white w-[240px] py-4`
                        : 'hidden',
                )}>
                <Link className='h-[54px]' href={'/admin/administrator/create-survey'}>
                    <div
                        className={cn(
                            pathname == '/admin/administrator/create-survey' ? `text-dark` : 'text-grey',
                            'hover:text-dark',
                        )}>
                        Заполнение формы
                    </div>
                </Link>
                <Link className='h-[54px]' href={'/admin/administrator/check-appointments'}>
                    <div
                        className={cn(
                            pathname == '/admin/administrator/check-appointments' ? `text-dark` : 'text-grey',
                            'hover:text-dark',
                        )}>
                        Проверка записей
                    </div>
                </Link>
                <Link className='h-[54px]' href={'/admin/administrator/create-survey'}>
                    <div
                        className={cn(
                            pathname == '/admin/administrator/create-survey' ? `text-dark` : 'text-grey',
                            'hover:text-dark',
                        )}>
                        Создание опроса
                    </div>
                </Link>
            </div>
        </>
    );
};
