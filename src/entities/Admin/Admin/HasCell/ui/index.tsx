import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  THasAdd,
  THasEdit,
  THasView,
} from '@/shared/types/Admin/shared/cells/Has';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { EnTableTypes } from '@/segments/Admin/MainTable';

interface Props<
  M extends EnModes | never = never,
  T extends EnTableTypes | never = never,
> extends TCellDataUpdate<M, T> {
  mode: M;
  data: M extends EnModes.view
    ? THasView
    : M extends EnModes.edit
      ? THasEdit
      : M extends EnModes.add
        ? THasAdd
        : never;
}

const HasCell = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
  cellIndex,
}: Props<M, T>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для HasCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View data={data as THasView} />
      ) : mode === EnModes.edit ? (
        <Edit data={data as THasEdit} />
      ) : mode === EnModes.add ? (
        <Add cellIndex={cellIndex} data={data as THasAdd} />
      ) : null}
    </>
  );
};

export { HasCell };
