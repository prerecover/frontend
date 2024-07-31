import { cn } from '@/lib/utils';
import { FC } from 'react';

interface MonthBlockProps {
    item: string;
    activeMonth: string;
    setActiveMonth: React.Dispatch<React.SetStateAction<string>>;
}

export const MonthBlock: FC<MonthBlockProps> = ({ item, activeMonth, setActiveMonth }) => {
    return (
        <div
            className={cn(
                'flex-center p-[10px] my-[7px] cursor-pointer',
                activeMonth == item && 'border border-solid border-blue rounded-[8px]',
            )}
            onClick={() => setActiveMonth(item)}>
            <div className={cn('font-medium text-[14px] text-grey-700 truncate', activeMonth == item && 'text-blue')}>
                {item}
            </div>
        </div>
    );
};
