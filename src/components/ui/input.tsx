import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
    return (
        <input
            type={type}
            className={cn(
                'w-full py-4 pr-5 pl-6 border-[1px] border-blue-100 rounded-[8px] bg-[#fff] placeholder:text-grey placeholder:font-normal placeholder:text-[14px]',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = 'Input';

export { Input };
