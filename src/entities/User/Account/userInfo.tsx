import { FC, SetStateAction, useEffect, useState } from 'react';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import Image from 'next/image';
import { Text } from '@/components/ui/text';

interface UserInfoProps {
    setPopup: React.Dispatch<SetStateAction<boolean>>;
}

export const UserInfo: FC<UserInfoProps> = ({ setPopup }) => {
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);
    return (
        <div className='flex flex-col h-[212px] w-full items-center py-[22px]'>
            <Image
                width={80}
                height={80}
                alt='user'
                src={user?.avatar || '/assets/doctor.svg'}
                priority
                className='rounded-full w-[100px] h-[100px]'
            />
            <Text className='text-[20px] font-medium mt-4' type='h1'>
                {user?.firstName} {user?.lastName}
            </Text>
            <div className='flex text-grey-700 text-[14px] font-medium gap-1 mt-2'>
                <Image src={'/assets/location.svg'} width={17} height={17} alt='location' />
                <Text type='p'>{user?.country?.title},</Text>
                <Text type='p'>{user?.city}</Text>
                <Image src={'/assets/warning.svg'} width={17} height={17} alt='location' className='ml-1' />
                {!loading && (
                    <Text type='p' className='cursor-pointer' onClick={() => setPopup(true)}>
                        Подробнее
                    </Text>
                )}
            </div>
        </div>
    );
};
