'use client';
import { Text } from '@/components/ui/text';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeaderCenter({ title }: { title: string }) {
    const router = useRouter();
    return (
        <>
            <div className='bg-white p-4 flex justify-center border-solid fixed border-[1px] border-blue-100 top-0 right-0 left-0 w-full h-[65px] z-30 desktop:hidden'>
                <Text type='h2' className='text-[17px] font-semibold'>
                    {title}
                </Text>
            </div>
            <Image
                src={'/assets/close-i.svg'}
                width={28}
                height={28}
                alt='close'
                className='absolute right-3 top-[18px] z-40'
                onClick={() => router.back()}
            />
        </>
    );
}
