import { cn } from '@/lib/utils';
import { FC } from 'react';

type Characteristic = {
    key: string;
    value: string;
    className?: string;
};

type Props = {
    className?: string;
    data: Characteristic[];
};

export const Characteristics: FC<Props> = ({ data, className }) => {
    return (
        <div className={cn(className, 'flex flex-col reverse_pc:h-full reverse_pc:justify-around gap-3')}>
            {data.map((el, idx) => {
                return (
                    <div
                        className='flex items-center gap-[5px] text-[12px] font-medium leading-[130%] truncate'
                        key={idx}>
                        <p className='text-grey-700'>{el.key} </p>
                        <p className={cn(el.className, 'truncate')}>{el.value}</p>
                    </div>
                );
            })}
        </div>
    );
};
