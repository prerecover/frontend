import { PropsWithClassName, PropsWithSize } from '@/shared/types';
import { FC } from 'react';

export const MenuIcon: FC<PropsWithClassName<PropsWithSize>> = ({ className, width = 24, height = 24 }) => {
    return (
        <svg className={className} width={width} height={height} viewBox='0 0 24 24' fill='none'>
            <circle cx='12' cy='12' r='2' fill='#262626' />
            <circle cx='12' cy='5' r='2' fill='#262626' />
            <circle cx='12' cy='19' r='2' fill='#262626' />
        </svg>
    );
};
