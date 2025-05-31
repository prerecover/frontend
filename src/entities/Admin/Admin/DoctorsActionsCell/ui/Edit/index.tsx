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
  transformEditToViewCancelSetter,
  transformEditToViewSaveSetter,
  useDoctorsStore,
} from '@/shared/store/Admin/useDoctorsStore';
import { ActionConfirmationModal } from '../../../ActionConfirmationModal';
import { cn } from '@/lib/utils';

const itemCls = 'rounded-[inherit]';
const itemContentCls =
  'w-full py-3 px-2.5 hover:bg-blue-100 duration-150 rounded-[inherit]';

interface Props extends TBodyItemIdField<EnTableTypes.doctors> {}

const Edit = ({ id }: Props) => {
  const transformEditToViewSave = useDoctorsStore(
    transformEditToViewSaveSetter
  );
  const transformEditToViewCancel = useDoctorsStore(
    transformEditToViewCancelSetter
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <p className="text-blue">Выбрать</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 bg-white-background">
        <DropdownMenuItem
          className={itemCls}
          onClick={() => {
            transformEditToViewSave({ id });
          }}
        >
          <p className={itemContentCls}>Сохранить</p>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <ActionConfirmationModal
            actionText="Удалить"
            closeText="Отменить"
            title="Вы уверены, что хотите отменить?"
            actionFn={() => {
              transformEditToViewCancel({ id });
            }}
          >
            <p className={cn(itemContentCls, 'm-1.5')}>Отменить</p>
          </ActionConfirmationModal>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { Edit };
