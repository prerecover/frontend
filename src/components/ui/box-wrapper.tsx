import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';
import { Text } from './text';

type BoxWrapperProps = {
    title?: string;
    children: React.ReactNode;
    color?: 'white' | 'blue';
    onClick?: React.MouseEventHandler;
};

const BoxWrapper: FC<PropsWithClassName<BoxWrapperProps>> = ({
    className,
    title,
    children,
    color = 'blue',
    onClick,
}) => {
    return (
        <div
            className={cn(
                'p-4 rounded-[12px] border-[1px] border-solid cursor-pointer',
                className,
                color === 'white' ? 'bg-white' : 'bg-blue',
            )}
            onClick={onClick}>
            {title && (
                <Text type='h6' fz={600} className='text-[16px] slider:text-[21px] mb-[15px]'>
                    {title}
                </Text>
            )}

            {children}
        </div>
    );
};

export default BoxWrapper;
