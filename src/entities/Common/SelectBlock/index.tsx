import { Text } from '@/components/ui/text';
import Image from 'next/image';
import Link from 'next/link';

export default function SelectBlock({ data, type }: { data: any; type: 'clinics' | 'news' | 'doctors' }) {
    return (
        <div className='flex flex-col p-4 gap-4'>
            {data.map((item: any) => (
                <Link
                    className='flex-between bg-white p-4 rounded-[12px]'
                    key={item._id}
                    href={`${type === 'clinics' ? `/clinic/${item._id}` : type === 'news' ? `/` : `/doctors/${item._id}`}`}>
                    <Text type='h4' className='text-[16px] font-medium'>
                        {item.title}
                    </Text>
                    <Image
                        src={'/assets/arrow-right.svg'}
                        alt='go to'
                        width={20}
                        height={20}
                        className='w-[24px] h-[24px] fill-grey-700'
                    />
                </Link>
            ))}
        </div>
    );
}
