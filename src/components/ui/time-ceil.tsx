import { FC } from 'react';
import { Text } from './text';
import { cn } from '@/lib/utils';

interface TimeCeilProps {
    value: string;
    time: string;
    setTime: React.Dispatch<React.SetStateAction<string>>;
}

export const TimeCiel: FC<TimeCeilProps> = ({ value = '09:30', setTime, time }) => {
    return (
        <div
            className={cn(
                'bg-white py-[10px] px-[19px] h-[37px] flex-center cursor-pointer rounded-[10px]',
                time == value && 'bg-blue',
            )}
            onClick={() => setTime(value)}>
            <Text type='p' className={cn('text-[14px] font-semibold text-grey-700', time == value && 'text-white')}>
                {value || '09:30'}
            </Text>
        </div>
    );
};
