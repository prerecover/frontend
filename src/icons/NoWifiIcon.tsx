import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const NoWifiIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 24, height = 24 }) => {
    return (
        <svg className={className} width={width} height={height} viewBox='0 0 24 24' fill='none'>
            <path
                d='M3.2749 3.27539L20.7251 20.7256'
                stroke='#262626'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M13.7419 10.252C16.0895 10.5977 17.5627 11.6217 19 13'
                stroke='#262626'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M5 12.5502C6.48208 11.311 8.26587 10.4864 10.17 10.1602'
                stroke='#262626'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M10.71 5.04974C12.8524 4.87711 15.0076 5.1379 17.047 5.81656C19.0864 6.49521 20.9682 7.57782 22.58 8.99974'
                stroke='#262626'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M1.41992 9.00109C2.80709 7.77494 4.39762 6.80032 6.11992 6.12109'
                stroke='#262626'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8.53003 16.1087C9.54523 15.3875 10.7597 15 12.005 15C13.2504 15 14.4648 15.3875 15.48 16.1087'
                stroke='#262626'
                strokeWidth='1.25'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path d='M12 20H12.01' stroke='#262626' strokeWidth='1.25' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
    );
};
