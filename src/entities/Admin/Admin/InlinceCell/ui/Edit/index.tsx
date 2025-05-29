'use client';
import { TInlineEdit } from '@/shared/types/Admin/shared/cells/Inline';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { useDebounce } from '@/shared/hooks/useDebounce';

interface Props<M extends EnModes, T extends EnTableTypes>
  extends TCellDataUpdate<M, T, string> {
  data: TInlineEdit;
}

const Edit = <M extends EnModes, T extends EnTableTypes>({
  data,
  cellIndex,
  updateFunc,
  id,
}: Props<M, T>) => {
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
