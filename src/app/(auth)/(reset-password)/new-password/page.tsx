import AuthContainer from '@/components/ui/authContainer';
import { Text } from '@/components/ui/text';
import { Toaster } from '@/components/ui/toaster';
import { SetNewPasswordForm } from '@/features/SetNewPassword/form';

export default function SetNewPassword() {
    return (
        <>
            <AuthContainer className=''>
                <Text type='h2' position='center' className='text-[20px] text-center mb-[20px]'>
                    Создайте новый пароль
                </Text>
                <SetNewPasswordForm />
            </AuthContainer>
            <Toaster />
        </>
    );
}
