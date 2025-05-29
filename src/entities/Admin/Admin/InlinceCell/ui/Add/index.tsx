'use client';
import { TInlineAdd } from '@/shared/types/Admin/shared/cells/Inline';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { useDebounce } from '@/shared/hooks/useDebounce';

interface Props<M extends EnModes, T extends EnTableTypes>
  extends TCellDataUpdate<M, T, string> {
  data: TInlineAdd;
}

const Add = <M extends EnModes, T extends EnTableTypes>({
  data,
  cellIndex,
  id,
  updateFunc,
}: Props<M, T>) => {
  const debounceUpdate = useDebounce((inputValue: string) => {
    updateFunc({ cellIndex, data: inputValue, id });
  }, 200);

  return (
    <input
      onChange={(event) => {
        debounceUpdate(event.target.value);
      }}
      className="w-full bg-[transparent] text-center"
    />
  );
};

export { Add };
