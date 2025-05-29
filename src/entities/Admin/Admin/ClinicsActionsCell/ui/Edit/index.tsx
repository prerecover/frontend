import { TClinicsBody } from '@/shared/types/Admin/Clinics/Bodies';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

const itemCls = 'rounded-[inherit]';
const itemContentCls =
  'w-full py-3 px-2.5 hover:bg-blue-100 duration-150 rounded-[inherit]';

interface Props<M extends EnModes> {
  id: TClinicsBody<M>[0]['id'];
}

const Edit = <M extends EnModes>({ id }: Props<M>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p>Выбрать</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 bg-white-background">
        <DropdownMenuItem className={itemCls}>
          <p className={itemContentCls}>Сохранить</p>
        </DropdownMenuItem>
        <DropdownMenuItem className={itemCls}>
          <p className={itemContentCls}>Отменить</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Edit };
