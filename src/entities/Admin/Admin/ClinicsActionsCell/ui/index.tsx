import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { View } from './View';
import { Edit } from './Edit';
import { Add } from './Add';
import { TBodyItemIdField } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { EnTableTypes } from '@/segments/Admin/MainTable';

interface Props<M extends EnModes>
  extends TBodyItemIdField<M, EnTableTypes.clinics> {
  mode: M;
}

const ClinicsActionsCell = <M extends EnModes>({ mode, id }: Props<M>) => {
  if (mode === undefined) {
    throw new Error(
      `Некорректный мод для ClinicsActionsCell. Было получение ${mode}, а ожидалось одно из значений EnModes`
    );
  }

  return (
    <>
      {mode === EnModes.view ? (
        <View<M> id={id} />
      ) : mode === EnModes.edit ? (
        <Edit<M> id={id} />
      ) : mode === EnModes.add ? (
        <Add<M> id={id} />
      ) : null}
    </>
  );
};

export { ClinicsActionsCell };
