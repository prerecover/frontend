import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import {
  TMultiselectAdd,
  TMultiselectEdit,
  TMultiselectView,
} from '@/shared/types/Admin/shared/cells/Multiselect';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { OmitForViewMode } from '@/shared/types/Admin/shared/Utils/OmitForViewMode';
import { EnLanguages } from '@/shared/types/Admin/Clinics/entities/Languages';

type Props<M extends EnModes, T extends EnTableTypes> = {
  mode: M;
  data: M extends EnModes.view
    ? TMultiselectView<string, EnLanguages>
    : M extends EnModes.edit
      ? TMultiselectEdit<string, EnLanguages>
      : M extends EnModes.add
        ? TMultiselectAdd<string, EnLanguages>
        : never;
} & OmitForViewMode<M, T>;

const MultiselectLanguagesCell = <M extends EnModes, T extends EnTableTypes>({
  mode,
  data,
  cellIndex,
  ...props
}: Props<M, T>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для MultiselectLanguagesCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View data={data as TMultiselectEdit<string, EnLanguages>} />
      ) : mode === EnModes.edit ? (
        <Edit
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          // @ts-ignore
          data={data as TMultiselectEdit<string, EnLanguages>}
        />
      ) : mode === EnModes.add ? (
        <Add
          //@ts-ignore
          id={props.id}
          cellIndex={cellIndex}
          // @ts-ignore
          updateFunc={props.updateFunc}
          data={data as TMultiselectAdd<string, EnLanguages>}
        />
      ) : null}
    </>
  );
};

export { MultiselectLanguagesCell };
