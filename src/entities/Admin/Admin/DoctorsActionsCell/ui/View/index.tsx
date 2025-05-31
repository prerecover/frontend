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
  useDoctorsStore,
  transformViewToEditSetter,
  removeCellSetter,
  changesConfirmAlertsCellsSelector,
} from '@/shared/store/Admin/useDoctorsStore';
import { ActionConfirmationModal } from '../../../ActionConfirmationModal';
import { cn } from '@/lib/utils';
import { UiAdminChangesConfirmPlaque } from '@/shared/ui/UiAdminChangesConfirmPlaque';

const itemCls = 'rounded-[inherit]';
const itemContentCls =
  'w-full py-3 px-2.5 hover:bg-blue-100 duration-150 rounded-[inherit]';

interface Props extends TBodyItemIdField<EnTableTypes.doctors> {}

const View = ({ id }: Props) => {
  const transformViewToEdit = useDoctorsStore(transformViewToEditSetter);
  const removeCell = useDoctorsStore(removeCellSetter);
  const isChangesConfirmAlertsCells = useDoctorsStore(
    changesConfirmAlertsCellsSelector
  ).find((curId) => curId === id);

  return (
    <>
      {isChangesConfirmAlertsCells ? <UiAdminChangesConfirmPlaque /> : null}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <p className="text-blue">Выбрать</p>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-0 bg-white-background">
          <DropdownMenuItem
            className={itemCls}
            onClick={() => {
              transformViewToEdit({ id });
            }}
          >
            <p className={itemContentCls}>Изменить</p>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <ActionConfirmationModal
              actionText="Удалить"
              closeText="Отменить"
              title="Вы уверены, что хотите удалить врача?"
              actionFn={() => {
                removeCell({ id });
              }}
            >
              <p className={cn(itemContentCls, 'm-1.5')}>Удалить</p>
            </ActionConfirmationModal>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export { View };
