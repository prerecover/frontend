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
  useServicesStore,
  transformViewToEditSetter,
} from '@/shared/store/Admin/useServicesStore';

const itemCls = 'rounded-[inherit]';
const itemContentCls =
  'w-full py-3 px-2.5 hover:bg-blue-100 duration-150 rounded-[inherit]';

interface Props extends TBodyItemIdField<EnTableTypes.clinics> {}

const View = ({ id }: Props) => {
  const transformViewToEdit = useServicesStore(transformViewToEditSetter);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p className="text-blue">Выбрать</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="p-0 bg-white-background"
        onClick={() => {
          transformViewToEdit({ id });
        }}
      >
        <DropdownMenuItem className={itemCls}>
          <p className={itemContentCls}>Изменить</p>
        </DropdownMenuItem>
        <DropdownMenuItem className={itemCls}>
          <p className={itemContentCls}>Удалить</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { View };
