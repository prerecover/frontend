'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  addAddCellSetter,
  useServicesStore,
} from '@/shared/store/Admin/useServicesStore';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const AddServiceButton: FC<Props> = ({ className, onClick, ...props }) => {
  const addServicesSetter = useServicesStore(addAddCellSetter);

  return (
    <Button
      {...props}
      variant="outline"
      onClick={(e) => {
        onClick && onClick(e);
        addServicesSetter();
      }}
      className={cn('h-auto rounded-xl px-6', className)}
    >
      <p>Добавить услугу +</p>
    </Button>
  );
};

export { AddServiceButton };
