import { CSSProperties, Dispatch, FC, ReactNode, SetStateAction } from 'react';

import styles from './styles.module.scss';
import { PropsWithClassName } from '@/shared/types';
import cn from 'clsx';

interface FilterProps {
    data: string[];
    width?: string;
    icons?: ReactNode[];
    style?: CSSProperties;
    isSelect: string;
    setIsSelect: Dispatch<SetStateAction<string>>;
}

export const FilterBox: FC<PropsWithClassName<FilterProps>> = ({ className, data, icons, setIsSelect, isSelect }) => {
    return (
        <div
            className={cn(
                ' w-full bg-white p-[5px] flex-between gap-2 rounded-[10px] border-solid border-[1px] border-blue-100 font-normal overflow-x-auto reverse_slider:w-full small_laptop:gap-[5px] overflow-y-hidden',
                className,
            )}>
            {data.map((item, i) => (
                <div
                    className={cn(
                        'w-full h-full text-center text-grey py-[10px] px-10 cursor-pointer transition-all ease-in duration-200 text-[14px] rounded-[5px] flex-center gap-[5px] reverse_slider:py-3 reverse_slider:px-[17px] small_laptop:text-[14px] small_laptop:py-[10px] small_laptop:px-[20px]',
                        isSelect == item && styles.filter_box_active,
                    )}
                    key={item}
                    onClick={() => {
                        setIsSelect(item);
                    }}>
                    <span className='w-max'>{item}</span>
                    {item && icons && icons[i]}
                </div>
            ))}
        </div>
    );
};
