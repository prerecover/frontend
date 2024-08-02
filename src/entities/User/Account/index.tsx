'use client';
import AccountForm from '@/features/AccountForm';
import { Avatar } from '@/features/AccountForm/avatar';

export default function AccountBlock() {
    return (
        <>
            <div className='h-[84px] w-full relative z-0 flex'>
                <Avatar />
            </div>
            <div className='bg-white'>
                <AccountForm />
            </div>
        </>
    );
}
