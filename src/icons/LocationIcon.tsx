import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const LocationIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 20, height = 20 }) => {
    return (
        <svg className={className} width={width} height={height} viewBox='0 0 20 20' fill='none'>
            <path
                d='M10.0004 11.1922C11.4363 11.1922 12.6004 10.0281 12.6004 8.59219C12.6004 7.15625 11.4363 5.99219 10.0004 5.99219C8.56445 5.99219 7.40039 7.15625 7.40039 8.59219C7.40039 10.0281 8.56445 11.1922 10.0004 11.1922Z'
                stroke='#0064FA'
                stroke-width='1.25'
            />
            <path
                d='M3.01675 7.07533C4.65842 -0.141339 15.3501 -0.133006 16.9834 7.08366C17.9417 11.317 15.3084 14.9003 13.0001 17.117C11.3251 18.7337 8.67508 18.7337 6.99175 17.117C4.69175 14.9003 2.05842 11.3087 3.01675 7.07533Z'
                stroke='#0064FA'
                stroke-width='1.25'
            />
        </svg>
    );
};
