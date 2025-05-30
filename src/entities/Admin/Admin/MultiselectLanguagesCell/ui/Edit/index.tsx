'use client';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TMultiselectEdit } from '@/shared/types/Admin/shared/cells/Multiselect';

interface Props<T extends EnTableTypes>
  extends TCellDataUpdate<EnModes.edit, T, string> {
  data: TMultiselectEdit;
}

const Edit = <T extends EnTableTypes>({
  data,
  cellIndex,
  updateFunc,
  id,
}: Props<T>) => {
  const debounceUpdate = useDebounce((inputValue: string) => {
    updateFunc({ cellIndex, data: inputValue, id });
  }, 200);

  return <p className="w-full bg-[transparent] text-center">1</p>;
};

export { Edit };
