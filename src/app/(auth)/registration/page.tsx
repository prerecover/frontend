import AuthContainer from '@/components/ui/authContainer';
import { Text } from '@/components/ui/text';
import googleImg from '/public/assets/google.svg';
import facebookImg from '/public/assets/facebook.svg';
import appleImg from '/public/assets/apple.svg';
import Image from 'next/image';
import { RegistrationForm } from '@/features/Registration/form';

export default function Registration() {
    return (
        <>
            <AuthContainer className='gap-[24px]'>
                <Text type='h2' position='center' className='text-[20px] text-center'>
                    Регистрация
                </Text>
                <RegistrationForm />
                <div className='flex-center gap-4'>
                    <Image src={googleImg} priority width={25} height={25} alt='with Google' />
                    <Image src={facebookImg} priority width={25} height={25} alt='with Facebook' />
                    <Image src={appleImg} priority width={25} height={25} alt='with Apple' />
                </div>
            </AuthContainer>
        </>
    );
}
