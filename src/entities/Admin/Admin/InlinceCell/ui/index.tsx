import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  TInlineAdd,
  TInlineEdit,
  TInlineView,
} from '@/shared/types/Admin/shared/cells/Inline';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';

interface Props<
  M extends EnModes | never = never,
  T extends EnTableTypes | never = never,
> extends TCellDataUpdate<M, T> {
  mode: M;
  data: M extends EnModes.view
    ? TInlineView
    : M extends EnModes.edit
      ? TInlineEdit
      : M extends EnModes.add
        ? TInlineAdd
        : never;
}

const InlineCell = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
}: Props<M, T>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для InlineCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View data={data as TInlineView} />
      ) : mode === EnModes.edit ? (
        <Edit data={data as TInlineEdit} />
      ) : mode === EnModes.add ? (
        <Add data={data as TInlineAdd} />
      ) : null}
    </>
  );
};

export { InlineCell };
