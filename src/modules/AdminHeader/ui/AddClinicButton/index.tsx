'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  addCellAddSelector,
  useClinicStore,
} from '@/shared/store/Admin/clinicStore';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const AddClinicButton: FC<Props> = ({ className, onClick, ...props }) => {
  const addClinic = useClinicStore(addCellAddSelector);

  return (
    <Button
      {...props}
      variant="outline"
      onClick={(e) => {
        onClick && onClick(e);
        addClinic();
      }}
      className={cn('h-auto rounded-xl px-6', className)}
    >
      <p>Добавить клинику +</p>
    </Button>
  );
};

export { AddClinicButton };
