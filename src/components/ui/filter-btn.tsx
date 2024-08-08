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
    small?: boolean;
}

export const FilterBtn: FC<PropsWithClassName<FilterBtnProps>> = ({ className, onClick, isActive, small = true }) => {
    return (
        <>
            {small == true ? (
                <Button
                    className={cn(className, 'h-[48px] p-3 rounded-[12px] ', small != true && 'slider:hidden')}
                    color='#0064FA'
                    width='48px'
                    onClick={onClick}>
                    <div className='justify-center gap-[10px]'>
                        <Image src={isActive ? close : controller} alt='controller' width={25} height={25} />
                    </div>
                </Button>
            ) : (
                <Button
                    className={cn(
                        className,
                        'py-[14px] px-[18px] rounded-[12px] ',
                        small != false && 'reverse_slider:hidden',
                    )}
                    width='150px'
                    color='#0064FA'
                    onClick={onClick}>
                    <div className='flex gap-[5px]'>
                        <Image src={controller} alt='controller' width={20} height={20} />
                        Фильтры
                    </div>
                </Button>
            )}
        </>
    );
};
