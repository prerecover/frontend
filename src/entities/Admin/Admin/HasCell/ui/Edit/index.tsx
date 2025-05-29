import { FC } from 'react';
import { THasEdit } from '@/shared/types/Admin/shared/cells/Has';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';

interface Props<
  M extends EnModes | never = never,
  T extends EnTableTypes | never = never,
> extends TCellDataUpdate<M, T, boolean> {
  data: THasEdit;
}

const Edit: FC<Props> = <
  M extends EnModes | never = never,
  T extends EnTableTypes | never = never,
>({
  data,
}: Props<M, T>) => {
  return <input className="w-full bg-[transparent] text-center" />;
};

export { Edit };
