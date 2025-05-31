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
  removeCellSetter,
} from '@/shared/store/Admin/useServicesStore';
import { cn } from '@/lib/utils';
import { ActionConfirmationModal } from '../../../ActionConfirmationModal';

const itemCls = 'rounded-[inherit]';
const itemContentCls =
  'w-full py-3 px-2.5 hover:bg-blue-100 duration-150 rounded-[inherit]';

interface Props extends TBodyItemIdField<EnTableTypes.clinics> {}

const View = ({ id }: Props) => {
  const transformViewToEdit = useServicesStore(transformViewToEditSetter);
  const removeCell = useServicesStore(removeCellSetter);

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
        <DropdownMenuItem asChild>
          <ActionConfirmationModal
            actionText="Удалить"
            closeText="Отменить"
            title="Вы уверены, что хотите удалить услугу?"
            actionFn={() => {
              removeCell({ id });
            }}
          >
            <p className={cn(itemContentCls, 'm-1.5')}>Удалить</p>
          </ActionConfirmationModal>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { View };
