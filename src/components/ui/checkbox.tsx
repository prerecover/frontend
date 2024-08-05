'use client';

import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            ' h-4 w-4 rounded-sm border border-blue disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue data-[state=checked]:text-primary',
            className,
        )}
        {...props}>
        <CheckboxPrimitive.Indicator className={cn('flex text-white relative left-[1px] bottom-[1px]')}>
            <Check className='h-5 w-5' />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
