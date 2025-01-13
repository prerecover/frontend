import { cn } from '@/lib/utils';
import { ChangeEvent, useRef } from 'react';
import { Text } from './text';
import Image from 'next/image';
import { UseFormSetValue } from 'react-hook-form';

export type ReactSetState = React.Dispatch<React.SetStateAction<string>>;
export type HookFormSetState = UseFormSetValue<any>;

export function AvatarLoad({
    className,
    imgState,
    reactSetState,
    formSetState,
}: {
    className?: string;
    imgState: string;
    reactSetState?: ReactSetState;
    formSetState?: HookFormSetState;
}) {
    const imageRef = useRef<HTMLInputElement | null>(null);

    const handleImg = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];
            if (reactSetState) {
                reactSetState(URL.createObjectURL(file));
            } else if (formSetState) {
                console.log('formsetstate');
                formSetState('avatar', URL.createObjectURL(file));
                console.log(imgState);
            }
        }
    };
    return (
        <>
            <input type='file' onChange={(e) => handleImg(e)} className='hidden' ref={imageRef} />
            {!imgState ? (
                <div
                    className={cn(
                        className,
                        'flex-center flex-col rounded-[12px] border-blue border-solid border-[1px] gap-4 cursor-pointer',
                    )}
                    onClick={() => imageRef.current?.click()}>
                    <Image src={'/assets/blue-plus.svg'} alt='plus blue' width={60} height={60} />
                    <div className='flex-col mx-auto flex-center'>
                        <Text type='p' className='text-[16px] text-blue' fz={500}>
                            Добавить фото
                        </Text>
                    </div>
                </div>
            ) : (
                <div
                    className={cn(className, 'rounded-[12px] cursor-pointer')}
                    onClick={() => imageRef.current?.click()}>
                    <Image src={imgState} alt='currmg' width={150} height={150} className='rounded-[12px]' />
                </div>
            )}
        </>
    );
}
