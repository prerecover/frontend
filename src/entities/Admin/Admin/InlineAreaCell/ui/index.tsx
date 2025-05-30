import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { OmitForViewMode } from '@/shared/types/Admin/shared/Utils/OmitForViewMode';
import {
  TInlineAreaAdd,
  TInlineAreaEdit,
  TInlineAreaView,
} from '@/shared/types/Admin/shared/cells/InlineArea';

type Props<M extends EnModes, T extends EnTableTypes> = {
  mode: M;
  data: M extends EnModes.view
    ? TInlineAreaView
    : M extends EnModes.edit
      ? TInlineAreaEdit
      : M extends EnModes.add
        ? TInlineAreaAdd
        : never;
} & OmitForViewMode<M, T>;

const InlineAreaCell = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
  cellIndex,
  ...props
}: Props<M, T>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для InlineAreaCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View data={data as TInlineAreaView} />
      ) : mode === EnModes.edit ? (
        <Edit
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TInlineAreaEdit}
        />
      ) : mode === EnModes.add ? (
        <Add
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TInlineAreaAdd}
        />
      ) : null}
    </>
  );
};

export { InlineAreaCell };
