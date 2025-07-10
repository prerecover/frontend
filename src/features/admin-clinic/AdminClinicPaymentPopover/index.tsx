import {
  Popover,
  PopoverButton,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const AdminClinicPaymentPopover = ({ children, className }: Props) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className={cn('min-w-60', className)}>
        <PopoverButton>Онлайн</PopoverButton>
        <PopoverButton>В кассу</PopoverButton>
        <PopoverButton>Врачу</PopoverButton>
        <PopoverButton>Оплата в рассрочку</PopoverButton>
        <PopoverButton>Оплата в кредит</PopoverButton>
      </PopoverContent>
    </Popover>
  );
};
