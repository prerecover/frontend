import { Text } from '@/components/ui/text';
import Image from 'next/image';

export default function PaymentCard({ positive }: { positive?: boolean }) {
    return (
        <div className='flex-between p-4'>
            <div className='flex gap-3 items-center'>
                <Image
                    src={positive ? '/assets/pay-positive.svg' : '/assets/pay-negative.svg'}
                    alt='payment'
                    width={30}
                    height={30}
                    className='w-[32px] h-[32px] '
                />
                <Text type='h4' className='text-[14px] font-medium'>
                    {positive ? 'Пополнение счёта' : 'Покупка'}
                </Text>
            </div>
            <div className='flex-col'>
                <div className='flex'>
                    <Text type='p'>{positive ? '+2000' : '-11'}</Text>
                    <Text type='p' className='text-grey-700'>
                        ,00 $
                    </Text>
                </div>
            </div>
        </div>
    );
}
