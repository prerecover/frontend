import { FC, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { LeaveIcon } from '@/icons/Leave';
import { Button } from '@/components/ui/button';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const ExitButton: FC<Props> = ({ className, ...props }) => {
  return (
    <Button
      variant="outline"
      className={cn('h-auto px-3', className)}
      {...props}
    >
      <LeaveIcon />
    </Button>
  );
};

export { ExitButton };
