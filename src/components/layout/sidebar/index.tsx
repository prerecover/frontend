'use client';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useSidebarStore } from '@/shared/store/sidebarStore';
import Logo from '@/components/logo';

import { useEffect } from 'react';
import { UserMenu } from './menu';
import { Text } from '@/components/ui/text';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { LastVisitClinic } from './lastVisitClinic';
import { IClinic } from '@/shared/types/clinic.interface';

export default function Sidebar({ className }: { className?: string }) {
    const { isOpenSidebar, setOpenSidebar } = useSidebarStore();
    const { user } = useAuth();
    const clinics: IClinic[] = [];

    const pathname = usePathname();

    user?.appointments?.forEach((appmnt) => {
        if (!clinics.includes(appmnt.clinic)) {
            clinics.push(appmnt.clinic);
        }
    });
    useEffect(() => {
        const resizeWindow = () => {
            if (window.innerWidth >= 1024 && window.innerWidth < 1280 && isOpenSidebar) {
                setOpenSidebar(false);
            }

            if (window.innerWidth >= 1280) {
                setOpenSidebar(true);
            }
        };

        resizeWindow();

        window.addEventListener('resize', resizeWindow);

        return () => window.removeEventListener('resize', resizeWindow);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);
    return (
        <>
            <section
                className={cn(
                    'fixed left-0 top-0 bottom-0 h-dvh w-[258px] bg-white z-10 transition-all duration-300 ease-in border-[1px] border-solid border-blue-100 mobile:hidden',
                    !isOpenSidebar && 'w-[100px]',
                    className,
                )}>
                <div className='flex justify-center h-[65px] border-b-[1px] border-solid border-b-blue-100'>
                    <Logo />
                </div>
                <div className={cn('flex flex-col gap-[10px] my-4 mx-0 py-0 px-4', !isOpenSidebar && 'items-center')}>
                    <UserMenu />
                </div>
                <div className='border-solid border-[0.01ex] border-[#EBF3FF]'></div>
                <Text
                    type='p'
                    className={cn('mt-8 text-grey-700 text-[14px] px-[28px]', !isOpenSidebar && 'hidden')}
                    position='start'>
                    Последние посещения
                </Text>
                <div className={cn('flex flex-col h-full px-[28px] mt-[29px] gap-6', !isOpenSidebar && 'items-center')}>
                    {clinics.slice(0, 5).map((clinic) => (
                        <LastVisitClinic key={clinic._id} clinic={clinic} />
                    ))}
                </div>
            </section>
        </>
    );
}
