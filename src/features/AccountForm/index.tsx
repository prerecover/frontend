'use client';
import Image from 'next/image';
import { FormBlock } from './form';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { useRef } from 'react';

export default function AccountForm() {
    const { user } = useAuth();
    const imageRef = useRef<HTMLInputElement | null>(null);
    return (
        <div className='flex flex-col'>
            <Image
                src={user?.avatar || '/assets/avatar-load.svg'}
                priority
                width={120}
                onClick={() => imageRef.current?.click()}
                height={120}
                className='w-[120px] h-[120px] m-auto rounded-full cursor-pointer'
                alt='avatar'
            />
            <FormBlock imageRef={imageRef} />
        </div>
    );
}
