'use client';

import { cn } from '@/lib/utils';
import { PropsWithClassName } from '@/shared/types';
import { FC } from 'react';
import { AdminClinicFilters } from '../AdminClinicFilters';
import { Button } from '@/components/ui/button';
import { LogoutButton } from '../LogoutButton';
import { Search } from '@/components/ui/search';

interface Props {
  search: string;
  onChangeSearch?: (value: string) => void;
}

export const AdminClinicHeader: FC<PropsWithClassName<Props>> = ({
  className,
  search,
  onChangeSearch,
}) => {
  return (
    <header
      className={cn(
        'flex justify-between items-center gap-6 p-6 flex-wrap',
        className
      )}
    >
      <AdminClinicFilters />

      <Button className="max-md:w-full ml-auto w-max">
        Добавить клинику +
      </Button>
      <Search
        className="min-w-[475px] max-md:min-w-wfull"
        value={search}
        onChange={onChangeSearch}
      />
      <LogoutButton className="max-md:-order-1 ml-auto" />
    </header>
  );
};
