import { FC, MouseEventHandler, useState } from 'react';
import { useSidebarStore } from '@/shared/store/sidebarStore';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import styles from './menuItem.module.scss';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import Image from 'next/image';
import { Text } from '@/components/ui/text';
import { useRouter } from 'next/navigation';

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
    const { user } = useAuth();
    const { isOpenSidebar } = useSidebarStore();
    const router = useRouter()
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
                    <Image src={'/assets/arrow-right.svg'} width={20} height={20} alt='go to' className='opacity-25' />
                <div className={cn('flex absolute w-fit h-auto bg-white ml-[255px] left-0 flex-col py-4 px-8 gap-8', !showAdminClinicsBlock && href === '/admin/clinics' && 'hidden')}

                onMouseLeave={() => setShow(false)}

                        >

                    <Text onClick={() => router.push('/admin/registration')} className='hover:text-blue text-dark'>Регистрация</Text>
                    <Text onClick={() => router.push('/admin/clinics')} className='hover:text-blue text-dark'>Клиники</Text>
                </div>
                </>
                )}
            </Link>
        </>
    );
};
