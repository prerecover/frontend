import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const SearchIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 24, height = 24 }) => {
    return (
        <svg className={className} width={width} height={height} viewBox='0 0 24 24' fill='none'>
            <path
                d='M10.8333 20.1667C15.988 20.1667 20.1667 15.988 20.1667 10.8333C20.1667 5.67868 15.988 1.5 10.8333 1.5C5.67868 1.5 1.5 5.67868 1.5 10.8333C1.5 15.988 5.67868 20.1667 10.8333 20.1667Z'
                stroke='#B1B2B4'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M22.5008 22.5008L17.4258 17.4258'
                stroke='#B1B2B4'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
