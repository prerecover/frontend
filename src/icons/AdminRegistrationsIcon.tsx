import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const AdminRegistrationIcon: FC<PropsWithClassName<PropsWithSize>> = ({
    className,
    width = 24,
    height = 24,
}) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M8 12.1992H15'
                stroke='#0064FA'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M8 16.1992H12.38'
                stroke='#0064FA'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z'
                stroke='#0064FA'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M16 4.01953C19.33 4.19953 21 5.42953 21 9.99953V15.9995C21 19.9995 20 21.9995 15 21.9995H9C4 21.9995 3 19.9995 3 15.9995L3 9.99953C3 5.43953 4.67 4.19953 8 4.01953'
                stroke='#0064FA'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
