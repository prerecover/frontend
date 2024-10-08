import * as React from 'react';

import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
    return (
        <textarea
            className={cn(
                'flex min-h-[80px] border-input bg-background px-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full py-4 pr-5 pl-6 border-[1px] border-blue-100 bg-[#fff] placeholder:text-grey placeholder:font-normal placeholder:text-[14px] rounded-[12px]',
                className,
            )}
            ref={ref}
            {...props}
        />
    );
});
Textarea.displayName = 'Textarea';

export { Textarea };
