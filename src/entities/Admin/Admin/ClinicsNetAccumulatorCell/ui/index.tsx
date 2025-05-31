import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { OmitForViewMode } from '@/shared/types/Admin/shared/Utils/OmitForViewMode';
import { TData } from '../types/Data';
import {
  TAccumulatorAdd,
  TAccumulatorEdit,
  TAccumulatorView,
} from '@/shared/types/Admin/shared/Cells/Accumulator';

type Props<M extends EnModes> = {
  mode: M;
  data: M extends EnModes.view
    ? TAccumulatorView<TData>
    : M extends EnModes.edit
      ? TAccumulatorEdit<TData>
      : M extends EnModes.add
        ? TAccumulatorAdd<TData>
        : never;
} & OmitForViewMode<M, EnTableTypes.clinics, 'cellIndex', EnModes.add>;

const ClinicsNetAccumulatorCell = <M extends EnModes>({
  mode,
  data,
  ...props
}: Props<M>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для ClinicsNetAccumulatorCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View data={data as TAccumulatorView<TData>} />
      ) : mode === EnModes.edit ? (
        <Edit
          //@ts-ignore
          id={props.id}
          //@ts-ignore
          cellIndex={props.cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TAccumulatorEdit<TData>}
        />
      ) : mode === EnModes.add ? (
        <Add data={data as TAccumulatorAdd<TData>} />
      ) : null}
    </>
  );
};

export { ClinicsNetAccumulatorCell };
