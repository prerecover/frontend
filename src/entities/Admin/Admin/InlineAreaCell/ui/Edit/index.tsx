'use client';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TInlineAreaEdit } from '@/shared/types/Admin/shared/Cells/InlineArea';

interface Props<T extends EnTableTypes> extends TCellDataUpdate<T, string> {
  data: TInlineAreaEdit;
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
    <textarea
      defaultValue={data}
      onChange={(event) => {
        debounceUpdate(event.target.value);
      }}
      className="w-full bg-[transparent] text-center pr-0.5 min-h-6 scroll-main-y max-h-[120px]"
    />
  );
};

export { Edit };
