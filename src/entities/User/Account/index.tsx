'use client';
import { Text } from '@/components/ui/text';
import AccountForm from '@/features/AccountForm';
import { Avatar } from '@/features/AccountForm/avatar';
import Image from 'next/image';
import AccountDesktopMenu from './desktop-menu';

export default function AccountBlock() {
    return (
        <>
            <div className='h-[84px] pc:h-[122px] pc:flex pc:px-4 pc:gap-4 bg-white  relative z-0 reverse_pc:flex-center pc:rounded-[12px] pc:m-4'>
                <Avatar />
            </div>
            <div className='bg-white pc:m-4 pc:rounded-[12px] reverse_pc:hidden'>
                <div className='reverse_pc:hidden'>
                    <div className='flex gap-4 p-4'>
                        {' '}
                        <Image src={'/assets/user.svg'} width={20} height={20} alt='user' />
                        <Text type='p' className='text-[14px]'>
                            Аккаунт
                        </Text>
                    </div>
                </div>
                <AccountForm />
            </div>
            <AccountDesktopMenu />
            <div className='pc:hidden'>
                <AccountForm />
            </div>
        </>
    );
}
