import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const AssignmentIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 20, height = 20 }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}>
            <path
                d='M16.25 10.4168V11.4585C16.25 13.9889 16.25 15.2541 15.7187 16.2028C15.3433 16.8732 14.7897 17.4268 14.1193 17.8022C13.1706 18.3335 11.9054 18.3335 9.375 18.3335V18.3335C6.84459 18.3335 5.57939 18.3335 4.63074 17.8022C3.9603 17.4268 3.40674 16.8732 3.03127 16.2028C2.5 15.2541 2.5 13.9889 2.5 11.4585V10.0002C2.5 7.66661 2.5 6.49983 2.95414 5.60853C3.35361 4.82453 3.99103 4.18711 4.77504 3.78764C5.66634 3.3335 6.83311 3.3335 9.16667 3.3335V3.3335H10'
                stroke='#0064FA'
                stroke-width='1.25'
                stroke-linecap='round'
            />
            <path
                d='M15.4165 2.08368C15.748 1.75216 16.1977 1.56592 16.6665 1.56592C17.1353 1.56592 17.585 1.75216 17.9165 2.08368C18.248 2.41521 18.4343 2.86484 18.4343 3.33368C18.4343 3.80253 18.248 4.25216 17.9165 4.58368L9.99984 12.5004L6.6665 13.3337L7.49984 10.0004L15.4165 2.08368Z'
                stroke='#0064FA'
                stroke-width='1.25'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
        </svg>
    );
};
