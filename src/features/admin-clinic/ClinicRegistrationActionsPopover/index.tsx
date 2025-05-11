import { Button } from '@/components/ui/button';
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

export const ClinicRegistrationActionsPopover = ({
  children,
  className,
}: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent align="end" className={cn('bg-white', className)}>
        <Button className="w-full bg-white text-dark text-left justify-start">
          Изменить
        </Button>
        <Button className="w-full bg-white text-dark text-left justify-start">
          Отменить
        </Button>
      </PopoverContent>
    </Popover>
  );
};
