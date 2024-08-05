import HeaderCenter from '@/components/layout/headerCenter';
import { Text } from '@/components/ui/text';
import Link from 'next/link';

export default async function Page() {
    return (
        <>
            <HeaderCenter title='Создание записи' />
            <div className='flex flex-col gap-3 justify-center px-4 h-screen items-center pb-[70px]'>
                <Link
                    className='w-full bg-white h-[82px] flex items-center rounded-[10px] justify-center'
                    href={'/clinic/select'}>
                    <Text type='p' className='text-[16px] font-semibold'>
                        Выбрать клинику
                    </Text>
                </Link>
                <Link
                    className='w-full bg-white h-[82px] flex items-center rounded-[10px] justify-center'
                    href={'/service/select'}>
                    <Text type='p' className='text-[16px] font-semibold'>
                        Выбрать услугу
                    </Text>
                </Link>
            </div>
        </>
    );
}
