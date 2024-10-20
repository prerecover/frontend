'use client';

import notifi from './assets/notification.svg';
import burger from './assets/burger.svg';
import burgerClose from './assets/close.svg';
import cn from 'clsx';
import { useBurgerMenu } from '@/shared/store/burgerMenu';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Text } from '@/components/ui/text';
import userImg from '/public/assets/doctor.svg';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { useNotifyModal } from '@/shared/store/notifyModal';
import { useNotifyStore } from '@/shared/store/notifyStore';

export default function MobileHeader({
    className,
    title,
    end = true,
}: {
    className?: string;
    title?: string;
    end?: boolean;
}) {
    const { isOpen, setIsOpen } = useBurgerMenu();

    const { notifications } = useNotifyStore();
    const haveUnread = notifications.filter((el) => el.isRead === false).length > 0;
    const router = useRouter();
    const { user } = useAuth();
    const blockLocation = ['/', '/search', '/messages', '/account', '/history', '/payments', '/appointments', '/saved'];
    const { isOpen: modalOpen, setIsOpen: setModalOpen } = useNotifyModal();
    const pathname = usePathname();
    return (
        <>
            {blockLocation.includes(pathname) ? (
                <div
                    className={cn(
                        'bg-white p-4 flex-between border-solid fixed border-[1px] border-blue-100 top-0 right-0 left-0 w-full h-[65px] z-30 desktop:hidden',

                        className,
                    )}>
                    <div
                        onClick={() => (!user._id ? router.push('/login') : setIsOpen(!isOpen))}
                        className='cursor-pointer'>
                        <Image src={isOpen ? burgerClose : burger} alt='burger' width={24} height={24} />
                    </div>
                    <div className='flex items-center'>
                        {pathname == '/appointments' ? (
                            <Image
                                src={'/assets/add-circle.svg'}
                                alt='add note'
                                width={28}
                                height={28}
                                priority
                                className='mr-7 cursor-pointer'
                                onClick={() => {
                                    router.push('/create-appointment');
                                    setIsOpen(false);
                                }}
                            />
                        ) : pathname == '/payments' ? (
                            <svg
                                className='mr-7 cursor-pointer'
                                width='28'
                                height='28'
                                viewBox='0 0 28 28'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M14.0013 3.79102C15.1289 3.79102 16.043 4.7051 16.043 5.83268C16.043 6.96026 15.1289 7.87435 14.0013 7.87435C12.8737 7.87435 11.9596 6.96026 11.9596 5.83268C11.9596 4.7051 12.8737 3.79102 14.0013 3.79102Z'
                                    fill='#262626'
                                />
                                <path
                                    d='M14.0013 11.9577C15.1289 11.9577 16.043 12.8718 16.043 13.9993C16.043 15.1269 15.1289 16.041 14.0013 16.041C12.8737 16.041 11.9596 15.1269 11.9596 13.9993C11.9596 12.8718 12.8737 11.9577 14.0013 11.9577Z'
                                    fill='#262626'
                                />
                                <path
                                    d='M14.0013 20.1243C15.1289 20.1243 16.043 21.0384 16.043 22.166C16.043 23.2936 15.1289 24.2077 14.0013 24.2077C12.8737 24.2077 11.9596 23.2936 11.9596 22.166C11.9596 21.0384 12.8737 20.1243 14.0013 20.1243Z'
                                    fill='#262626'
                                />
                            </svg>
                        ) : (
                            <></>
                        )}
                        <div className='flex gap-4'>
                            <div className='relative mt-1' onClick={() => setModalOpen(!modalOpen)}>
                                <Image src={notifi} alt='notifications' width={24} height={24} />
                                {haveUnread && (
                                    <div className='absolute bg-red-400 top-[2px] right-[3px] rounded-[50%] w-[5px] h-[5px]'></div>
                                )}
                            </div>
                            <div
                                className='w-[30px] h-[30px] rounded-[50%] overflow-hidden cursor-pointer slider:hidden'
                                onClick={() => router.push(`${user?._id ? '/account' : '/login'}`)}>
                                <Image
                                    src={user?.avatar ? user?.avatar : userImg}
                                    alt='avatar'
                                    width={40}
                                    height={40}
                                    className='object-cover h-[40px]'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='flex-between py-0 px-[15px] h-[65px] bg-white border-solid border-[1px] border-blue-100 w-full z-30 fixed top-0 left-0 right-0 desktop:hidden'>
                        <div className='flex'>
                            <Image
                                src={'/assets/menu-left-arrow.svg'}
                                alt='go back'
                                width={15}
                                height={15}
                                priority
                                onClick={() => router.back()}
                            />
                            <div>
                                <Text type='p' className='ml-4 mt-[2px] text-[20px]' fw={600}>
                                    {title}
                                </Text>
                                {title !== 'Записи' && end ? (
                                    <svg
                                        className='fixed right-2 top-4'
                                        width='28'
                                        height='28'
                                        viewBox='0 0 28 28'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M14.0013 3.79102C15.1289 3.79102 16.043 4.7051 16.043 5.83268C16.043 6.96026 15.1289 7.87435 14.0013 7.87435C12.8737 7.87435 11.9596 6.96026 11.9596 5.83268C11.9596 4.7051 12.8737 3.79102 14.0013 3.79102Z'
                                            fill='#262626'
                                        />
                                        <path
                                            d='M14.0013 11.9577C15.1289 11.9577 16.043 12.8718 16.043 13.9993C16.043 15.1269 15.1289 16.041 14.0013 16.041C12.8737 16.041 11.9596 15.1269 11.9596 13.9993C11.9596 12.8718 12.8737 11.9577 14.0013 11.9577Z'
                                            fill='#262626'
                                        />
                                        <path
                                            d='M14.0013 20.1243C15.1289 20.1243 16.043 21.0384 16.043 22.166C16.043 23.2936 15.1289 24.2077 14.0013 24.2077C12.8737 24.2077 11.9596 23.2936 11.9596 22.166C11.9596 21.0384 12.8737 20.1243 14.0013 20.1243Z'
                                            fill='#262626'
                                        />
                                    </svg>
                                ) : end === true ? (
                                    <svg
                                        className='fixed right-5 top-4'
                                        width='33'
                                        height='33'
                                        viewBox='0 0 33 33'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'>
                                        <path
                                            d='M16.5 31.2832C8.34625 31.2832 1.71875 24.6557 1.71875 16.502C1.71875 8.3482 8.34625 1.7207 16.5 1.7207C24.6537 1.7207 31.2812 8.3482 31.2812 16.502C31.2812 24.6557 24.6537 31.2832 16.5 31.2832ZM16.5 3.7832C9.4875 3.7832 3.78125 9.48945 3.78125 16.502C3.78125 23.5145 9.4875 29.2207 16.5 29.2207C23.5125 29.2207 29.2187 23.5145 29.2187 16.502C29.2187 9.48945 23.5125 3.7832 16.5 3.7832Z'
                                            fill='#0064FA'
                                        />
                                        <path
                                            d='M22 17.5312H11C10.4363 17.5312 9.96875 17.0638 9.96875 16.5C9.96875 15.9363 10.4363 15.4688 11 15.4688H22C22.5638 15.4688 23.0312 15.9363 23.0312 16.5C23.0312 17.0638 22.5638 17.5312 22 17.5312Z'
                                            fill='#0064FA'
                                        />
                                        <path
                                            d='M16.5 23.0332C15.9363 23.0332 15.4688 22.5657 15.4688 22.002V11.002C15.4688 10.4382 15.9363 9.9707 16.5 9.9707C17.0638 9.9707 17.5312 10.4382 17.5312 11.002V22.002C17.5312 22.5657 17.0638 23.0332 16.5 23.0332Z'
                                            fill='#0064FA'
                                        />
                                    </svg>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div
                            className='w-[40px] h-[40px] rounded-[50%] overflow-hidden cursor-pointer '
                            onClick={() => router.push(`${user?._id ? '/account' : '/login'}`)}>
                            <Image
                                src={user?.avatar ? user?.avatar : userImg}
                                alt='avatar'
                                width={40}
                                height={40}
                                className='object-cover h-[40px]'
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
