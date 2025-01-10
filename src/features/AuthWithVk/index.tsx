import AuthWith from '@/components/ui/auth-with';
import vkImg from '/public/assets/vk.svg';
import { useRouter } from 'next/navigation';

export default function AuthWithVk() {
    const router = useRouter();
    return (
        <div onClick={() => router.push('/api/auth/vk')} className='cursor-pointer'>
            <AuthWith img={vkImg} text='Войти с помощью ВКонтакте' />
        </div>
    );
}
