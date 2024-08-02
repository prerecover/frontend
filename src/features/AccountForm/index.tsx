'use client';
import Image from 'next/image';
import { FormBlock } from './form';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { useRef } from 'react';
import { Avatar } from './avatar';

export default function AccountForm() {
    const { user } = useAuth();
    const imageRef = useRef<HTMLInputElement | null>(null);
    return (
        <div className='flex flex-col mt-7 p-4'>
            <FormBlock imageRef={imageRef} />
        </div>
    );
}
