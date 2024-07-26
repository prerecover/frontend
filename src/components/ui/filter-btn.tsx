import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';
import { Button } from './button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import controller from '/public/assets/controller.svg';
import close from '/public/assets/close.svg';

export interface FilterBtnProps {
    onClick: () => void;
    isActive?: boolean;
}

export const FilterBtn: FC<PropsWithClassName<FilterBtnProps>> = ({ className, onClick, isActive }) => {
    return (
        <>
            <Button
                className={cn(className, 'py-[14px] px-[18px] rounded-[12px] reverse_slider:hidden')}
                width='150px'
                color='#0064FA'
                onClick={onClick}>
                <div className='flex gap-[5px]'>
                    <Image src={controller} alt='controller' width={20} height={20} />
                    Фильтры
                </div>
            </Button>
            <Button
                className={cn(className, 'h-[34px] p-2 rounded-[8px] slider:hidden')}
                color='#0064FA'
                width='34px'
                onClick={onClick}>
                <div className='justify-center gap-[10px]'>
                    <Image src={isActive ? close : controller} alt='controller' width={16} height={16} />
                </div>
            </Button>
        </>
    );
};
