import { cn } from '@/lib/utils';
import { FC, HTMLAttributes } from 'react';
import { AppointmentSelect } from './AppointmentSelect';
import { ClinicButton } from './ClinicButton';
import { AddClinicButton } from './AddClinicButton';
import { Input } from '@/components/ui/input';
import { SearchInput } from '@/components/ui/search-input';
import { ExitButton } from './ExitButton';
import { SMSButton } from './SMSButton';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AdminHeader: FC<Props> = ({ className, ...props }) => {
  return (
    <header className={cn('p-6 flex', className)} {...props}>
      <div className="flex gap-x-6 flex-1">
        <ClinicButton />
        <AppointmentSelect />
        <SMSButton />
      </div>
      <div className="flex gap-x-6">
        <AddClinicButton />
        <SearchInput value="1" className="w-[475px]" />
        <ExitButton />
      </div>
    </header>
  );
};

export { AdminHeader };
