import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const AddClinicButton: FC<Props> = ({ className, ...props }) => {
  return (
    <Button
      variant="outline"
      {...props}
      className={cn('h-auto rounded-xl px-6', className)}
    >
      <p>Добавить клинику +</p>
    </Button>
  );
};

export { AddClinicButton };
