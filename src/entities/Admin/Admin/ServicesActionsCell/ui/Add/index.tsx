'use client';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TBodyItemIdField } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import {
  removeAddCellSetter,
  transformAddToViewSetter,
  useServicesStore,
} from '@/shared/store/Admin/useServicesStore';

const itemCls = 'rounded-[inherit]';
const itemContentCls =
  'w-full py-3 px-2.5 hover:bg-blue-100 duration-150 rounded-[inherit]';

interface Props extends TBodyItemIdField<EnTableTypes.services> {}

const Add = ({ id }: Props) => {
  const removeAddCell = useServicesStore(removeAddCellSetter);
  const transformAddToView = useServicesStore(transformAddToViewSetter);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p className="text-blue">Выбрать</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 bg-white-background">
        <DropdownMenuItem
          className={itemCls}
          onClick={() => {
            transformAddToView({ id });
          }}
        >
          <p className={itemContentCls}>Зарегистрировать</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={itemCls}
          onClick={() => {
            removeAddCell({ id });
          }}
        >
          <p className={itemContentCls}>Отменить</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Add };
