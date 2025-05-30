'use client';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TInlineAreaAdd } from '@/shared/types/Admin/shared/cells/InlineArea';

interface Props<T extends EnTableTypes>
  extends TCellDataUpdate<EnModes.add, T, string> {
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
      className="w-full bg-[transparent] text-center"
    />
  );
};

export { Add };
