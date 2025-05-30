import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TLinkAdd, TLinkView } from '@/shared/types/Admin/shared/cells/Link';
import { View } from './View';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { OmitForViewMode } from '@/shared/types/Admin/shared/Utils/OmitForViewMode';

export type TData = {
  qnt: number;
};

type Props<M extends EnModes, T extends EnTableTypes> = {
  mode: M;
  data: M extends EnModes.view | EnModes.edit
    ? TLinkView<TData>
    : M extends EnModes.add
      ? TLinkAdd
      : never;
} & OmitForViewMode<M, T, 'cellIndex'>;

const ClinicsDoctorsLink = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
  ...props
}: Props<M, T>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для ClinicsDoctorsLink. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view || mode === EnModes.edit ? (
        <View data={data as TLinkView<TData>} />
      ) : mode === EnModes.add ? (
        <Add
          //@ts-ignore
          id={props.id}
          // @ts-ignore
          cellIndex={props.cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TLinkAdd}
        />
      ) : null}
    </>
  );
};

export { ClinicsDoctorsLink };
