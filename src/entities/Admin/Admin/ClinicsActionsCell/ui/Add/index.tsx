import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TBodyItemIdField } from '@/shared/types/Admin/shared/Utils/BodyItemId';

const itemCls = 'rounded-[inherit]';
const itemContentCls =
  'w-full py-3 px-2.5 hover:bg-blue-100 duration-150 rounded-[inherit]';

interface Props<M extends EnModes | never = never>
  extends TBodyItemIdField<M, EnTableTypes.clinics> {}

const Add = <M extends EnModes>({ id }: Props<M>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p className="text-blue">Выбрать</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 bg-white-background">
        <DropdownMenuItem className={itemCls}>
          <p className={itemContentCls}>Зарегистрировать</p>
        </DropdownMenuItem>
        <DropdownMenuItem className={itemCls}>
          <p className={itemContentCls}>Отменить</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Add };
