'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  addAddCellSetter,
  useDoctorsStore,
} from '@/shared/store/Admin/useDoctorsStore';
import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {}

const AddDoctorsButton: FC<Props> = ({ className, onClick, ...props }) => {
  const addDoctorsSetter = useDoctorsStore(addAddCellSetter);

  return (
    <Button
      {...props}
      variant="outline"
      onClick={(e) => {
        onClick && onClick(e);
        addDoctorsSetter();
      }}
      className={cn('h-auto rounded-xl px-6', className)}
    >
      <p>Добавить врача +</p>
    </Button>
  );
};

export { AddDoctorsButton };
