import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { TBodyItemIdField } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { EnTableTypes } from '@/segments/Admin/MainTable';

interface Props<M extends EnModes>
  extends TBodyItemIdField<EnTableTypes.doctors> {
  mode: M;
}

const DoctorsActionsCell = <M extends EnModes>({ mode, id }: Props<M>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для DoctorsActionsCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View id={id} />
      ) : mode === EnModes.edit ? (
        <Edit id={id} />
      ) : mode === EnModes.add ? (
        <Add id={id} />
      ) : null}
    </>
  );
};

export { DoctorsActionsCell };
