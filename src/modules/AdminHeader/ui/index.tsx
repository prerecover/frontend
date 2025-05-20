import { cn } from '@/lib/utils';
import { FC, HTMLAttributes } from 'react';
import { AppointmentSelect } from './AppointmentSelect';
import { ClinicButton } from './ClinicButton';
import { AddClinicButton } from './AddClinicButton';
import { Input } from '@/components/ui/input';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AdminHeader: FC<Props> = ({ className, ...props }) => {
  return (
    <header className={cn('p-6 flex', className)} {...props}>
      <div className="flex gap-x-6 flex-1">
        <ClinicButton />
        <AppointmentSelect />
      </div>
      <AddClinicButton />
      <Input />
    </header>
  );
};

export { AdminHeader };
