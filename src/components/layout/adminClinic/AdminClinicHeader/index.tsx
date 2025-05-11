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
        'flex flex-col desktop:flex-row justify-between items-start gap-6 p-6 ',
        className
      )}
    >
      <LogoutButton className="w-full desktop:hidden" />
      <AdminClinicFilters />

      <div className="flex flex-col desktop:flex-row gap-6 w-full desktop:w-max">
        <Button className="w-full  desktop:w-max h-12 text-nowrap">
          Добавить клинику +
        </Button>
        <Search
          className="desktop:min-w-[475px] max-md:min-w-full h-12"
          value={search}
          onChange={onChangeSearch}
        />
        <LogoutButton className="w-full hidden desktop:flex" />
      </div>
    </header>
  );
};
