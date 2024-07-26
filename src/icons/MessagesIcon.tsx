import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const MessagesIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 20, height = 20 }) => {
    return (
        <svg className={className} width={width} height={height} viewBox='0 0 24 24' fill='none'>
            <g clipPath='url(#clip0_8094_103913)'>
                <path
                    d='M17 20.5H7C4 20.5 2 19 2 15.5L2 8.5C2 5 4 3.5 7 3.5L17 3.5C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z'
                    stroke='#B1B2B4'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9'
                    stroke='#B1B2B4'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
            <defs>
                <clipPath id='clip0_8094_103913'>
                    <rect width='24' height='24' fill='white' />
                </clipPath>
            </defs>
        </svg>
    );
};
