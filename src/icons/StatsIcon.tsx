import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const StatsIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 20, height = 20 }) => {
    return (
        <svg className={className} width={width} height={height} viewBox='0 0 20 20' fill='none'>
            <g id='icon'>
                <g id='vuesax/linear/chart-square'>
                    <g id='Group'>
                        <path
                            id='Vector'
                            d='M8.42394 9.2915H6.21561C5.69061 9.2915 5.26562 9.71647 5.26562 10.2415V14.5081H8.42394V9.2915V9.2915Z'
                            stroke='#0064FA'
                            strokeWidth='1.25'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            id='Vector_2'
                            d='M10.6327 5.49902H9.366C8.841 5.49902 8.41602 5.92404 8.41602 6.44904V14.4991H11.5744V6.44904C11.5744 5.92404 11.1577 5.49902 10.6327 5.49902Z'
                            stroke='#0064FA'
                            strokeWidth='1.25'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                        <path
                            id='Vector_3'
                            d='M13.7884 10.7075H11.5801V14.4992H14.7384V11.6575C14.7301 11.1325 14.3051 10.7075 13.7884 10.7075Z'
                            stroke='#0064FA'
                            strokeWidth='1.25'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                        />
                    </g>
                    <path
                        id='Vector_4'
                        d='M7.49935 18.3332H12.4993C16.666 18.3332 18.3327 16.6665 18.3327 12.4998V7.49984C18.3327 3.33317 16.666 1.6665 12.4993 1.6665H7.49935C3.33268 1.6665 1.66602 3.33317 1.66602 7.49984V12.4998C1.66602 16.6665 3.33268 18.3332 7.49935 18.3332Z'
                        stroke='#0064FA'
                        strokeWidth='1.25'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </g>
            </g>
        </svg>
    );
};
