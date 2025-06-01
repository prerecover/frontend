import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  TDefaultAdd,
  TDefaultEdit,
  TDefaultView,
} from '@/shared/types/Admin/shared/Cells/Default';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { OmitForViewMode } from '@/shared/types/Admin/shared/Utils/OmitForViewMode';

type Props<M extends EnModes, T extends EnTableTypes> = {
  mode: M;
  data: M extends EnModes.view
    ? TDefaultView
    : M extends EnModes.edit
      ? TDefaultEdit
      : M extends EnModes.add
        ? TDefaultAdd
        : never;
} & OmitForViewMode<M, T, 'cellIndex', EnModes.edit | EnModes.add>;

const DefaultCell = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
}: Props<M, T>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для DefaultCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View data={data as TDefaultView} />
      ) : mode === EnModes.edit ? (
        <Edit data={data as TDefaultEdit} />
      ) : mode === EnModes.add ? (
        <Add data={data as TDefaultAdd} />
      ) : null}
    </>
  );
};

export { DefaultCell };
