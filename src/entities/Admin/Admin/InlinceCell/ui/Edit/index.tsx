import { TInlineEdit } from '@/shared/types/Admin/shared/cells/Inline';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';

interface Props<
  M extends EnModes | never = never,
  T extends EnTableTypes | never = never,
> extends TCellDataUpdate<M, T> {
  data: TInlineEdit;
}

const Edit = <
  M extends EnModes | never = never,
  T extends EnTableTypes | never = never,
>({
  data,
  cellIndex,
  id,
}: Props<M, T>) => {
  return (
    <input
      defaultValue={data}
      className="w-full bg-[transparent] text-center"
    />
  );
};

export { Edit };
