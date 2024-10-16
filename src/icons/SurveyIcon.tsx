import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const SurveyIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 24, height = 24 }) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M16 2L8 2C4 2 2 4 2 8L2 21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z'
                stroke='#0064FA'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12.9088 7.8382L7.71881 13.0282C7.51881 13.2282 7.32882 13.6182 7.28882 13.8982L7.00882 15.8782C6.90882 16.5982 7.40882 17.0982 8.12882 16.9982L10.1088 16.7182C10.3888 16.6782 10.7788 16.4882 10.9788 16.2882L16.1688 11.0982C17.0588 10.2082 17.4888 9.1682 16.1688 7.8482C14.8488 6.5182 13.8088 6.9382 12.9088 7.8382Z'
                stroke='#0064FA'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M12.168 8.57812C12.608 10.1481 13.838 11.3881 15.418 11.8281'
                stroke='#0064FA'
                strokeWidth='1.5'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};
