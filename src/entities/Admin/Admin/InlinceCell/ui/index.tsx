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

type OmitForViewMode<
  M extends EnModes,
  T extends EnTableTypes,
> = M extends EnModes.view
  ? Omit<TCellDataUpdate<M, T, string>, 'updateFunc'>
  : TCellDataUpdate<M, T, string>;

type Props<M extends EnModes, T extends EnTableTypes> = {
  mode: M;
  data: M extends EnModes.view
    ? TInlineView
    : M extends EnModes.edit
      ? TInlineEdit
      : M extends EnModes.add
        ? TInlineAdd
        : never;
} & OmitForViewMode<M, T>;

const InlineCell = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
  cellIndex,
  id,
  ...props
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
        <Edit
          id={id}
          cellIndex={cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TInlineEdit}
        />
      ) : mode === EnModes.add ? (
        <Add
          id={id}
          cellIndex={cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TInlineAdd}
        />
      ) : null}
    </>
  );
};

export { InlineCell };
