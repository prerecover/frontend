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
  useClinicsStore,
} from '@/shared/store/Admin/useClinicsStore';
import { ActionConfirmationModal } from '../../../ActionConfirmationModal';
import { cn } from '@/lib/utils';

const itemCls = 'rounded-[inherit]';
const itemContentCls =
  'w-full py-3 px-2.5 hover:bg-blue-100 duration-150 rounded-[inherit]';

interface Props extends TBodyItemIdField<EnTableTypes.clinics> {}

const Add = ({ id }: Props) => {
  const removeAddCell = useClinicsStore(removeAddCellSetter);
  const transformAddToView = useClinicsStore(transformAddToViewSetter);

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
        <DropdownMenuItem asChild>
          <ActionConfirmationModal
            actionText="Удалить"
            closeText="Отменить"
            title="Вы уверены, что хотите отменить?"
            actionFn={() => {
              removeAddCell({ id });
            }}
          >
            <p className={cn(itemContentCls, 'm-1.5')}>Отменить</p>
          </ActionConfirmationModal>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Add };
