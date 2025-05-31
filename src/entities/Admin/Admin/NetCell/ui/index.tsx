import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  TNetAdd,
  TNetEdit,
  TNetView,
} from '@/shared/types/Admin/shared/Cells/Net';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { OmitForViewMode } from '@/shared/types/Admin/shared/Utils/OmitForViewMode';

type Props<M extends EnModes, T extends EnTableTypes> = {
  mode: M;
  data: M extends EnModes.view
    ? TNetView
    : M extends EnModes.edit
      ? TNetEdit
      : M extends EnModes.add
        ? TNetAdd
        : never;
} & OmitForViewMode<M, T>;

const NetCell = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
  cellIndex,
  ...props
}: Props<M, T>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для NetCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View data={data as TNetView} />
      ) : mode === EnModes.edit ? (
        <Edit
          //@ts-ignore
          updateFunc={props.updateFunc}
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          data={data as TNetEdit}
        />
      ) : mode === EnModes.add ? (
        <Add
          //@ts-ignore
          updateFunc={props.updateFunc}
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          data={data as TNetAdd}
        />
      ) : null}
    </>
  );
};

export { NetCell };
