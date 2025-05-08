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
      <PopoverContent className={cn(className)}>
        <Button>Изменить</Button>
        <Button>Отменить</Button>
      </PopoverContent>
    </Popover>
  );
};
