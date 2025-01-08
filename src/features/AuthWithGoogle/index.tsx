import AuthWith from '@/components/ui/auth-with';
import googleImg from '/public/assets/google.svg';
import { signIn } from 'next-auth/react';

export default function AuthWithGoogle() {
    return (
        <div onClick={() => signIn('google', { callbackUrl: '/' })} className='cursor-pointer'>
            <AuthWith img={googleImg} text='Войти с помощью Google' />
        </div>
    );
}
