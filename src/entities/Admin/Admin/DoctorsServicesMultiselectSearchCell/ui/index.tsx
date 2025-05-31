import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { OmitForViewMode } from '@/shared/types/Admin/shared/Utils/OmitForViewMode';
import { TAddData, TEditData, TViewData } from '../types/Data';

type Props<M extends EnModes> = {
  mode: M;
  data: M extends EnModes.view
    ? TViewData
    : M extends EnModes.edit
      ? TEditData
      : M extends EnModes.add
        ? TAddData
        : never;
} & OmitForViewMode<M, EnTableTypes.doctors>;

const DoctorsServicesMultiselectSearchCell = <M extends EnModes>({
  mode,
  data,
  cellIndex,
  ...props
}: Props<M>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для DoctorsServicesMultiselectSearchCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View data={data as TViewData} />
      ) : mode === EnModes.edit ? (
        <Edit
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TEditData}
        />
      ) : mode === EnModes.add ? (
        <Add
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TAddData}
        />
      ) : null}
    </>
  );
};

export { DoctorsServicesMultiselectSearchCell };
