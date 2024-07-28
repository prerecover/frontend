import { Text } from '@/components/ui/text';
import { LinkArrIcon } from '@/icons';
import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';

interface LinkItemProps {
    onClick: () => void;
    title: string;
    count: number | undefined;
    icon: JSX.Element;
}

export const LinkItem: FC<PropsWithClassName<LinkItemProps>> = ({ className, title, count = 0, onClick, icon }) => {
    return (
        <div
            className={cn(
                className,
                'rounded-[12px] border border-solid border-blue-100 bg-[#e0edff] p-4 text-dark flex cursor-pointer flex-col gap-9 justify-between ',
            )}
            onClick={onClick}>
            <div className='flex justify-between items-start gap-2 text-[14px] font-medium'>
                <Text type='p'>{title}</Text>
                <div className='translate-y-1'>
                    <LinkArrIcon />
                </div>
            </div>
            <div className='flex-between gap-2 text-[30px] font-medium'>
                <Text type='p'>{count}</Text>
                {icon}
            </div>
        </div>
    );
};
