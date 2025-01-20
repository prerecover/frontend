'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import errorImg from '/public/assets/500.svg';
export default function Error() {
    const router = useRouter();
    return (
        <div>
            <div className='flex-center w-dvw h-dvh gap-9 flex-col'>
                <Image src={errorImg} alt='Internal Server Error' width={500} height={373} priority />
                <Button width='436px' onClick={() => router.push('/')}>
                    Вернуться
                </Button>
            </div>
        </div>
    );
}
