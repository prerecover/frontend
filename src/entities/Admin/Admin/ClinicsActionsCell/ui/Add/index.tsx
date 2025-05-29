import { TClinicsBody } from '@/shared/types/Admin/Clinics/Bodies';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

interface Props<M extends EnModes> {
  id: TClinicsBody<M>[0]['id'];
}

const Add = <M extends EnModes>({ id }: Props<M>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p>Выбрать</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <p>Зарегистрировать</p>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <p>Отменить</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Add };
