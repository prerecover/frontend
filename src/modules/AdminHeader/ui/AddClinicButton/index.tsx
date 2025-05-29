'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  addAddCellSetter,
  useClinicsStore,
} from '@/shared/store/Admin/useClinicsStore';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const AddClinicButton: FC<Props> = ({ className, onClick, ...props }) => {
  const addClinicSetter = useClinicsStore(addAddCellSetter);

  return (
    <Button
      {...props}
      variant="outline"
      onClick={(e) => {
        onClick && onClick(e);
        addClinicSetter();
      }}
      className={cn('h-auto rounded-xl px-6', className)}
    >
      <p>Добавить клинику +</p>
    </Button>
  );
};

export { AddClinicButton };
