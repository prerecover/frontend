import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const DiagnosisIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 22, height = 20 }) => {
    return (
        <svg
            className={className}
            width={width}
            height={height}
            viewBox='0 0 22 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M12.6694 16.5514H4.36238C2.82673 16.5514 1.864 14.8924 2.62589 13.5591L8.63746 3.03885C9.40525 1.69523 11.3426 1.69522 12.1104 3.03885L16.4041 10.5528'
                stroke='#0064FA'
                stroke-width='1.5'
                stroke-linecap='round'
            />
            <path
                d='M17.4712 17.9229C18.8355 17.9229 19.9415 16.817 19.9415 15.4527C19.9415 14.0884 18.8355 12.9824 17.4712 12.9824C16.1069 12.9824 15.001 14.0884 15.001 15.4527C15.001 16.817 16.1069 17.9229 17.4712 17.9229Z'
                stroke='#0064FA'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
            <path
                d='M20.6475 18.629L19.5889 17.5703'
                stroke='#0064FA'
                stroke-width='1.5'
                stroke-linecap='round'
                stroke-linejoin='round'
            />
            <path d='M10.2959 6.0332L10.2959 10' stroke='#0064FA' stroke-width='1.5' stroke-linecap='round' />
            <rect x='9.58984' y='11.9609' width='1.41158' height='2.00781' rx='0.705788' fill='#0064FA' />
        </svg>
    );
};
