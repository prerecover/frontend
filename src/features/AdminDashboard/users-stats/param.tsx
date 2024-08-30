import { Text } from '@/components/ui/text';
import { FC } from 'react';

interface UsersStatsParamProps {
    text: string;
    count: number;
}

export const Param: FC<UsersStatsParamProps> = ({ text, count }) => {
    return (
        <div className='bg-blue-100 py-[20px] px-[18px] flex-between rounded-[12px]'>
            <Text className='text-[16px] font-medium'>{text}</Text>
            <Text className='text-[18px] font-semibold'>{count}</Text>
        </div>
    );
};
