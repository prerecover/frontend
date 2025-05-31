'use client';
import { TInlineEdit } from '@/shared/types/Admin/shared/Cells/Inline';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { useDebounce } from '@/shared/hooks/useDebounce';

interface Props<T extends EnTableTypes> extends TCellDataUpdate<T, string> {
  data: TInlineEdit;
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

  return (
    <input
      defaultValue={data}
      onChange={(event) => {
        debounceUpdate(event.target.value);
      }}
      className="w-full bg-[transparent] text-center"
    />
  );
};

export { Edit };
