'use client';
import AuthWith from '@/components/ui/auth-with';
import googleImg from '/public/assets/google.svg';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AuthWithGoogle() {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/api/auth/google')} className='cursor-pointer'>
            <AuthWith img={googleImg} text='Войти с помощью Google' />
        </div>
    );
}
