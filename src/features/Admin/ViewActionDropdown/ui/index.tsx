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
import { TTableDataItem } from '@/shared/types/Admin/shared/Tables';
import { DeleteConfirmationModal } from '@/widgets/Admin/ClinicsTable';

interface Props {
  id: TTableDataItem['id'];
}

const ViewActionDropdown: FC<Props> = ({ id }) => {
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
            switchMode({ id, mode: EnMode.edit });
          }}
        >
          Изменить
        </DropdownMenuItem>
        <DeleteConfirmationModal>
          <DropdownMenuItem>Удалить</DropdownMenuItem>
        </DeleteConfirmationModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ViewActionDropdown };
