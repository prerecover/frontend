import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const PlusMenuIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 30, height = 30 }) => {
    return (
        <svg className={className} width={width} height={height} viewBox='0 0 30 30' fill='none'>
            <path
                d='M16 23H14C13.4477 23 13 22.5523 13 22V18C13 17.4477 12.5523 17 12 17H8C7.44772 17 7 16.5523 7 16V14C7 13.4477 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12V8C13 7.44772 13.4477 7 14 7H16C16.5523 7 17 7.44772 17 8V12C17 12.5523 17.4477 13 18 13H22C22.5523 13 23 13.4477 23 14V16C23 16.5523 22.5523 17 22 17H18C17.4477 17 17 17.4477 17 18V22C17 22.5523 16.5523 23 16 23Z'
                stroke='#B1B2B4'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <circle
                cx='15'
                cy='15'
                r='13'
                stroke='#B1B2B4'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
