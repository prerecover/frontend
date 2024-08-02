import { useAuth } from '@/app/(auth)/auth-wrapper';
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
        <div className='flex mt-7  m-auto z-20 '>
            <input type='file' onChange={(e) => handleImg(e)} className='hidden' ref={imageRef} />
            <Image
                src={user?.avatar || '/assets/avatar-load.svg'}
                priority
                width={100}
                onClick={() => imageRef.current?.click()}
                height={100}
                className='w-[100px] h-[100px] rounded-full cursor-pointer '
                alt='avatar'
            />
        </div>
    );
};
