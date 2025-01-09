import AuthWith from '@/components/ui/auth-with';
import vkImg from '/public/assets/vk.svg';
import { signIn } from 'next-auth/react';

export default function AuthWithVk() {
    return (
        <div onClick={() => signIn('vk', { callbackUrl: '/' })} className='cursor-pointer'>
            <AuthWith img={vkImg} text='Войти с помощью ВКонтакте' />
        </div>
    );
}
