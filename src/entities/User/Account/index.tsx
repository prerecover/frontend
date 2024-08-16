'use client';
import AccountForm from '@/features/AccountForm';
import { Avatar } from '@/features/AccountForm/avatar';
import AccountDesktopMenu from './desktop-menu';

export default function AccountBlock() {
    return (
        <>
            <div className='h-[84px] desktop:h-[122px] desktop:flex desktop:px-4 desktop:gap-4 bg-white  relative z-0 mobile:flex-center rounded-[12px] desktop:m-4'>
                <Avatar />
            </div>
            <div className='bg-white desktop:m-4 desktop:rounded-[12px] mobile:hidden'>
                <AccountForm />
            </div>
            <AccountDesktopMenu />
            <div className='desktop:hidden'>
                <AccountForm />
            </div>
        </>
    );
}
