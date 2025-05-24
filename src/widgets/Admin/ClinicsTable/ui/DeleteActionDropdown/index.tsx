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
  switchModeSelector,
  useClinicStore,
} from '@/shared/store/Admin/clinicStore';
import { EnMode } from '@/segments/Admin/MainTable';

interface Props {
  id: TTableDataItem['id'];
}

const DeleteActionDropdown: FC<Props> = ({ id }) => {
  const switchMode = useClinicStore(switchModeSelector);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-sm font-normal text-blue">
          Выбрать
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          onClick={() => {
            switchMode({ id, mode: EnMode.view });
          }}
        >
          Зарегистрировать
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            switchMode({ id, mode: EnMode.view });
          }}
        >
          Отменить
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { DeleteActionDropdown };
