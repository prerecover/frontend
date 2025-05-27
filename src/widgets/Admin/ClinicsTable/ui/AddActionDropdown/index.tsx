'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { FC } from 'react';
import { TTableDataItem } from '../..';
import {
  deleteCellAddSelector,
  useClinicStore,
} from '@/shared/store/Admin/clinicStore';

interface Props {
  id: TTableDataItem['id'];
}

const AddActionDropdown: FC<Props> = ({ id }) => {
  const deleteCell = useClinicStore(deleteCellAddSelector);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-base font-normal text-blue">
          Выбрать
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>Зарегистрировать</DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            deleteCell({ id });
          }}
        >
          Отменить
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { AddActionDropdown };
