import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { FC } from 'react';
import { DeleteConfirmationModal } from '../DeleteConfirmationModal';

interface Props {}

const ViewActionDropdown: FC<Props> = ({}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-sm font-normal text-blue">
          Выбрать
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>Изменить</DropdownMenuItem>
        <DeleteConfirmationModal>
          <DropdownMenuItem>Удалить</DropdownMenuItem>
        </DeleteConfirmationModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ViewActionDropdown };
