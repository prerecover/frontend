import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  THasAdd,
  THasEdit,
  THasView,
} from '@/shared/types/Admin/shared/Cells/Has';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { OmitForViewMode } from '@/shared/types/Admin/shared/Utils/OmitForViewMode';

type Props<M extends EnModes, T extends EnTableTypes> = {
  mode: M;
  data: M extends EnModes.view
    ? THasView
    : M extends EnModes.edit
      ? THasEdit
      : M extends EnModes.add
        ? THasAdd
        : never;
} & OmitForViewMode<M, T>;

const HasCell = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
  cellIndex,
  ...props
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
        <Edit
          //@ts-ignore
          updateFunc={props.updateFunc}
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          data={data as THasEdit}
        />
      ) : mode === EnModes.add ? (
        <Add
          //@ts-ignore
          updateFunc={props.updateFunc}
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          data={data as THasAdd}
        />
      ) : null}
    </>
  );
};

export { HasCell };
