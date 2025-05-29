import { FC } from 'react';
import { THasEdit } from '@/shared/types/Admin/shared/cells/Has';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';

interface Props<M extends EnModes, T extends EnTableTypes>
  extends TCellDataUpdate<M, T, boolean> {
  data: THasEdit;
}

const Edit = <M extends EnModes, T extends EnTableTypes>({
  data,
  cellIndex,
  id,
  updateFunc,
}: Props<M, T>) => {
  return <input className="w-full bg-[transparent] text-center" />;
};

export { Edit };
