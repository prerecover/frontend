import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';

interface UsersStatsParamProps {
    text: string;
    count: number;
}

export const Param: FC<PropsWithClassName<UsersStatsParamProps>> = ({ text, count, className }) => {
    return (
        <div className={cn(`bg-blue-100 py-[20px] px-[18px] flex-between rounded-[12px]`, className)}>
            <Text className='text-[16px] font-medium'> {text}</Text>
            <Text className='text-[18px] font-semibold'>{count}</Text>
        </div>
    );
};
