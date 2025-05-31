import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  TWorkTimeAdd,
  TWorkTimeEdit,
  TWorkTimeView,
} from '@/shared/types/Admin/shared/cells/WorkTime';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { OmitForViewMode } from '@/shared/types/Admin/shared/Utils/OmitForViewMode';

type Props<M extends EnModes, T extends EnTableTypes> = {
  mode: M;
  data: M extends EnModes.view
    ? TWorkTimeView
    : M extends EnModes.edit
      ? TWorkTimeEdit
      : M extends EnModes.add
        ? TWorkTimeAdd
        : never;
} & OmitForViewMode<M, T, 'cellIndex'>;

const WorkTimesCell = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
  ...props
}: Props<M, T>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для WorkTimesCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View data={data as TWorkTimeView} />
      ) : mode === EnModes.edit ? (
        <Edit
          //@ts-ignore
          id={props.id}
          //@ts-ignore
          cellIndex={props.cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TWorkTimeEdit}
        />
      ) : mode === EnModes.add ? (
        <Add
          //@ts-ignore
          id={props.id}
          //@ts-ignore
          cellIndex={props.cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TWorkTimeAdd}
        />
      ) : null}
    </>
  );
};

export { WorkTimesCell };
