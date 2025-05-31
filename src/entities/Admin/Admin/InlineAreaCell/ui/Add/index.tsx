'use client';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TInlineAreaAdd } from '@/shared/types/Admin/shared/Cells/InlineArea';

interface Props<T extends EnTableTypes> extends TCellDataUpdate<T, string> {
  data: TInlineAreaAdd;
}

const Add = <T extends EnTableTypes>({
  data,
  cellIndex,
  id,
  updateFunc,
}: Props<T>) => {
  const debounceUpdate = useDebounce((inputValue: string) => {
    updateFunc({ cellIndex, data: inputValue, id });
  }, 200);

  return (
    <textarea
      onChange={(event) => {
        debounceUpdate(event.target.value);
      }}
      className="w-full bg-[transparent] text-center pr-0.5 min-h-6 scroll-main-y max-h-[120px]"
    />
  );
};

export { Add };
