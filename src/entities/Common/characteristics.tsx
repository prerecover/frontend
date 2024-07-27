import { FC } from 'react';

type Characteristic = {
    key: string;
    value: string;
};

type Props = {
    data: Characteristic[];
};

export const Characteristics: FC<Props> = ({ data }) => {
    return (
        <div className='flex flex-col gap-[4px]'>
            {data.map((el, idx) => {
                return (
                    <div
                        className='flex items-center gap-[5px] text-[12px] font-medium leading-[130%] truncate'
                        key={idx}>
                        <p className='text-grey-700'>{el.key} </p>
                        <span>{el.value}</span>
                    </div>
                );
            })}
        </div>
    );
};
