import AuthWith from '@/components/ui/auth-with';
import Link from 'next/link';
import appleImg from '/public/assets/apple.svg';

export default function AuthWithApple() {
    return (
        <Link href={'/'}>
            <AuthWith img={appleImg} text='Войти с помощью Apple' />
        </Link>
    );
}
