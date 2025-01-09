"use client"
import AuthContainer from '@/components/ui/authContainer';
import { Text } from '@/components/ui/text';
import AuthWithGoogle from '@/features/AuthWithGoogle';
import AuthWithTelegram from '@/features/AuthWithTelegram';
import AuthWithVk from '@/features/AuthWithVk';
import { RegistrationForm } from '@/features/Registration/form';
import Link from 'next/link';

export default function Registration() {
    return (
        <>
            <AuthContainer className='gap-[24px]'>
                <Text type='h2' position='center' className='text-[20px] text-center'>
                    Регистрация
                </Text>
                <RegistrationForm />
                <div className='flex-center gap-1'>
                    <Text className='text-grey-600'>У вас есть аккаунт?</Text>
                    <Link href={'/login'} className='text-blue'>
                        Войти
                    </Link>
                </div>
                <div className='grid gap-4 reverse_slider:flex-center'>
                    <AuthWithTelegram />
                    <AuthWithGoogle />
                    <AuthWithVk />
                </div>
            </AuthContainer>
        </>
    );
}
