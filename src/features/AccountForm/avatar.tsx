import { useAuth } from '@/app/(auth)/auth-wrapper';
import { Text } from '@/components/ui/text';
import { getCookie } from '@/shared/lib/hooks/useCookie';
import { gql, useMutation } from '@apollo/client';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';

const AVATAR_LOAD = gql(`
mutation UploadAvatar ($avatar: Upload!){
    uploadAvatar(avatarUpload: { avatar: $avatar})
}
`);

export const Avatar: FC = () => {
    const { user, setUser } = useAuth();
    const [token, setToken] = useState<string | undefined>();
    const [mutate] = useMutation(AVATAR_LOAD, {
        context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
        onCompleted(data) {
            setUser((prev) => ({ ...prev, avatar: data.uploadAvatar }));
        },
    });
    const imageRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const accessToken = getCookie('access_token');
        setToken(accessToken);
    }, []);

    const handleImg = (e: any) => {
        const file = e.target.files[0];
        mutate({ variables: { avatar: file } });
    };
    return (
        <div className='flex mt-7  z-20 desktop:my-auto desktop:gap-4'>
            <input type='file' onChange={(e) => handleImg(e)} className='hidden' ref={imageRef} />
            <Image
                src={user?.avatar || '/assets/avatar-load.svg'}
                priority
                width={100}
                onClick={() => imageRef.current?.click()}
                height={100}
                className='w-[100px] h-[100px] rounded-full cursor-pointer object-cover'
                alt='avatar'
            />
            <div className='flex flex-col mobile:hidden justify-center gap-2'>
                <Text
                    type='p'
                    className='font-semibold text-[24px]'>{`${user.lastName} ${user.firstName?.charAt(0) + '.'} ${user.surname?.charAt(0) + '.'}  `}</Text>
                <Text type='p' className='font-medium text-[16px] text-grey-700'>
                    Пользователь
                </Text>
            </div>
        </div>
    );
};
