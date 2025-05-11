import { StatusBadge } from '@/components/common/StatusBadge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const AdminClinicStatusPopover = ({ className, children }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        className={cn(
          'min-w-24 min-h-14 flex justify-center items-center gap-3.5 desktop:max-w-24 bg-white',
          className
        )}
      >
        <StatusBadge
          className="cursor-pointer ease-linear duration-200 hover:opacity-60"
          type="success"
        />
        <div className="w-[1px] h-8 bg-white-100"></div>
        <StatusBadge
          className="cursor-pointer ease-linear duration-200 hover:opacity-60"
          type="error"
        />
      </PopoverContent>
    </Popover>
  );
};
