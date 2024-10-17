import { FC } from 'react';
import { Text } from './text';
import { cn } from '@/lib/utils';

interface TimeCeilProps {
    value: string;
    time?: string;
    setTime?: React.Dispatch<React.SetStateAction<string>>;
}

export const TimeCiel: FC<TimeCeilProps> = ({ value = '09:30', setTime, time }) => {
    const handleClick = () => {
        if (setTime) {
            setTime(value);
        } else {
            return;
        }
    };
    return (
        <div
            className={cn(
                'bg-white py-[10px] px-[19px] h-[37px] flex-center cursor-pointer rounded-[10px] border-solid border-[1px] border-grey-100',
                time == value && 'bg-blue',
            )}
            onClick={() => handleClick()}>
            <Text type='p' className={cn('text-[14px] font-semibold text-grey-700', time == value && 'text-white')}>
                {value || '09:30'}
            </Text>
        </div>
    );
};
