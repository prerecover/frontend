'use client';
import { cn } from '@/lib/utils';
import { FC, HTMLAttributes, useState } from 'react';
import { AppointmentSelect } from './AppointmentSelect';
import { ClinicButton } from './ClinicButton';
import { AddClinicButton } from './AddClinicButton';
import { SearchInput } from '@/components/ui/search-input';
import { ExitButton } from './ExitButton';
import { SMSButton } from './SMSButton';
import { usePathValidating } from '@/shared/hooks/usePathValidating';
import { ADMIN_ROUTES } from '@/shared/utils/paths';
import { AddServiceButton } from './AddServiceButton';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const AdminHeader: FC<Props> = ({ className, ...props }) => {
  const [search, setSearch] = useState<string>('');

  const isClinicsPages = usePathValidating({
    validator: ADMIN_ROUTES.ADMIN.CLINICS.INDEX,
  });
  const isServicesPages = usePathValidating({
    validator: `${ADMIN_ROUTES.ADMIN.CLINICS.INDEX}/services/...`,
  });

  return (
    <header className={cn('p-6 flex', className)} {...props}>
      <div className="flex gap-x-6 flex-1">
        <ClinicButton />
        <AppointmentSelect />
        <SMSButton />
      </div>
      <div className="flex gap-x-6">
        {isClinicsPages ? (
          <AddClinicButton />
        ) : isServicesPages ? (
          <AddServiceButton />
        ) : null}
        <SearchInput
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          className="w-[475px]"
        />
        <ExitButton />
      </div>
    </header>
  );
};

export { AdminHeader };
