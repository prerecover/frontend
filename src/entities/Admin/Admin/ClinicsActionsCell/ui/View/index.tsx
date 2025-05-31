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
  changesConfirmAlertsCellsSelector,
  removeCellSetter,
  transformViewToEditSetter,
  useClinicsStore,
} from '@/shared/store/Admin/useClinicsStore';
import { ActionConfirmationModal } from '../../../ActionConfirmationModal';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const itemCls = 'rounded-[inherit]';
const itemContentCls =
  'w-full py-3 px-2.5 hover:bg-blue-100 duration-150 rounded-[inherit]';

interface Props extends TBodyItemIdField<EnTableTypes.clinics> {}

const View = ({ id }: Props) => {
  const transformViewToEdit = useClinicsStore(transformViewToEditSetter);
  const removeCell = useClinicsStore(removeCellSetter);
  const isChangesConfirmAlertsCells = useClinicsStore(
    changesConfirmAlertsCellsSelector
  ).find((curId) => curId === id);

  return (
    <>
      {isChangesConfirmAlertsCells ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[calc(100%+14px)] py-2 px-3 rounded-xl shadow-mainShadow bg-white-100 animate-scale-fade transform-gpu">
          <Image
            src="/assets/confirmation-checkmark.svg"
            width={42}
            height={42}
            className="mx-auto"
            alt=""
          />
          <p className="text-lg font-medium text-center leading-[112%]">
            Изменения
            <br />
            сохранены
          </p>
        </div>
      ) : null}
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
              title="Вы уверены, что хотите удалить клинику?"
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
