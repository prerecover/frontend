import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const AccountWithTimeIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 24, height = 24 }) => {
    return (
        <svg className={className} width={width} height={height} viewBox='0 0 24 24' fill='none'>
            <rect width='24' height='24' fill='none' stroke='none' />
            <path
                d='M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z'
                stroke='#B1B2B4'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <g clipPath='url(#clip0_7545_53922)'>
                <path
                    d='M19.5 23C21.433 23 23 21.433 23 19.5C23 17.567 21.433 16 19.5 16C17.567 16 16 17.567 16 19.5C16 21.433 17.567 23 19.5 23Z'
                    stroke='#B1B2B4'
                    strokeWidth='1.35'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    d='M19.5 18.2031V19.7256L20.3313 20.5569'
                    stroke='#B1B2B4'
                    strokeWidth='1.35'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
            <path
                d='M3.40625 22C3.40625 18.13 7.25625 15 11.9962 15C12.6861 15 13.7248 15.0805 14.6762 15.4528'
                stroke='#B1B2B4'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <defs>
                <clipPath id='clip0_7545_53922'>
                    <rect width='9' height='9' fill='white' transform='translate(15 15)' />
                </clipPath>
            </defs>
        </svg>
    );
};
