import { TInlineAdd } from '@/shared/types/Admin/shared/cells/Inline';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';

interface Props<
  M extends EnModes | never = never,
  T extends EnTableTypes | never = never,
> extends TCellDataUpdate<M, T> {
  data: TInlineAdd;
}

const Add = <
  M extends EnModes | never = never,
  T extends EnTableTypes | never = never,
>({
  data,
  cellIndex,
  id,
}: Props<M, T>) => {
  return <input className="w-full bg-[transparent] text-center" />;
};

export { Add };
