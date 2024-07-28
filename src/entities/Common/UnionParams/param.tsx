import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';

interface ParamProps {
    title: string;
    text: string;
}

export const Param: FC<PropsWithClassName<ParamProps>> = ({ className, title, text }) => {
    return (
        <div className={cn(className, 'flex flex-col gap-2 text-center items-center font-medium')}>
            <Text type='h6' className='text-[18px]'>
                {title}
            </Text>
            <Text type='p' className='text-[12px] text-dark'>
                {text}
            </Text>
        </div>
    );
};
