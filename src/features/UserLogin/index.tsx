import { FC } from 'react';
import { Text } from '@/components/ui/text';
import Link from 'next/link';
import LoginForm from './form';

export const UserLogin: FC = () => {
    return (
        <>
            <LoginForm />
            <div className='flex-center gap-1'>
                <Text type='p' className='text-[16px] text-grey'>
                    Нет учетной записи?
                </Text>
                <Link href={'/registration'}>
                    <Text type='p' className='text-[16px] text-blue'>
                        Зарегистрироваться
                    </Text>
                </Link>
            </div>
        </>
    );
};
