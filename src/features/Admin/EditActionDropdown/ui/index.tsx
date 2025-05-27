'use client';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { FC } from 'react';
import {
  switchModeSelector,
  useClinicStore,
} from '@/shared/store/Admin/clinicStore';
import { EnMode } from '@/segments/Admin/MainTable';
import { TTableDataItem } from '@/shared/types/Admin/Tables';

interface Props {
  id: TTableDataItem['id'];
}

const EditActionDropdown: FC<Props> = ({ id }) => {
  const switchMode = useClinicStore(switchModeSelector);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-base font-normal text-blue">
          Выбрать
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem
          onClick={() => {
            switchMode({ id, mode: EnMode.view });
          }}
        >
          Сохранить
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

export { EditActionDropdown };
