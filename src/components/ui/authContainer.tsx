import { ReactNode } from 'react';
import WhiteContentBlock from './whiteContentBlock';

import { cn } from '@/lib/utils';

export default function AuthContainer({ children, className }: { children: ReactNode; className: string }) {
    return (
        <div className='w-full h-dvh flex-center'>
            <WhiteContentBlock
                className={cn(
                    'w-[460px] pt-[30px] px-[20px] pb-[20px] not_found:w-full not_found:h-dvh not_found:justify-center flex flex-col',
                    className,
                )}>
                {children}
            </WhiteContentBlock>
        </div>
    );
}
