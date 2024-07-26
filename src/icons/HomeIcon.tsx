import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const HomeIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 26, height = 26 }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M9.52203 2.31515L3.2337 7.21515C2.1837 8.03182 1.33203 9.77015 1.33203 11.0885L1.33203 19.7335C1.33203 22.4401 3.53703 24.6568 6.2437 24.6568H19.7537C22.4604 24.6568 24.6654 22.4402 24.6654 19.7452V11.2518C24.6654 9.84015 23.7204 8.03182 22.5654 7.22682L15.3554 2.17515C13.722 1.03182 11.097 1.09015 9.52203 2.31515Z'
                stroke='#B1B2B4'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M13 19.9883V16.4883'
                stroke='#B1B2B4'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
