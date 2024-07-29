import { Text } from '@/components/ui/text';
import PaymentCard from '@/entities/Payment/PaymentCard';
import { FC } from 'react';

export const Operations: FC = () => {
    return (
        <div className='flex flex-col gap-2'>
            <Text type='p' className='text-grey-700 text-[16px] font-medium'>
                29 июля
            </Text>
            <div className='bg-white rounded-[12px]'>
                <PaymentCard />
                <PaymentCard positive={true} />
            </div>
        </div>
    );
};
