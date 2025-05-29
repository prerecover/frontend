import { ClinicsActionsCell } from '@/entities/Admin/Admin/ClinicsActionsCell';
import { HasCell } from '@/entities/Admin/Admin/HasCell/ui';
import { InlineCell } from '@/entities/Admin/Admin/InlinceCell';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TClinicsAllCellTypes } from '@/shared/types/Admin/Clinics/AllCellTypes';
import { EnAccumulator } from '@/shared/types/Admin/Clinics/FloatCellTypes/Accumulator';
import { EnLinks } from '@/shared/types/Admin/Clinics/FloatCellTypes/Links';
import { EnMultiselectTypes } from '@/shared/types/Admin/Clinics/FloatCellTypes/Multiselect';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { TUpdateFuncField } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { THasEdit } from '@/shared/types/Admin/shared/cells/Has';
import { TInlineEdit } from '@/shared/types/Admin/shared/cells/Inline';

interface Params
  extends TCellIndexField,
    TUpdateFuncField<EnTableTypes.clinics, unknown> {
  mode: EnModes.edit;
  cellType: TClinicsAllCellTypes;
  data: unknown;
  id: TBodyItemId<EnModes.edit, EnTableTypes.clinics>;
}

export const returnEditComponent = ({
  cellIndex,
  cellType,
  mode,
  data,
  id,
  updateFunc,
}: Params) => {
  switch (cellType) {
    case EnCellTypes.inline:
      return (
        <InlineCell<EnModes.edit, EnTableTypes.clinics>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineEdit}
          mode={mode}
          id={id}
        />
      );
    case EnCellTypes.action:
      return <ClinicsActionsCell<EnModes.edit> id={id} mode={mode} />;
    case EnCellTypes.has:
      return (
        <HasCell<EnModes.edit, EnTableTypes.clinics>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as THasEdit}
          mode={mode}
          id={id}
        />
      );
    case EnCellTypes.inlineArea:
      return 1;
    case EnMultiselectTypes.language:
      return 1;
    case EnAccumulator.clinicsNet:
      return 1;
    case EnLinks.doctors:
      return 1;
    case EnLinks.services:
      return 1;
    default:
      throw new Error(`Некорректный cellType для ClinicsTable. Был получен ${cellType}. Поле cellType может быть только следующими данными: cellType:
		| EnCellTypes.inline
		| EnCellTypes.action
		| EnCellTypes.has
		| EnCellTypes.inlineArea
		| EnMultiselectTypes.language
		| EnAccumulator.clinicsNet`);
  }
};
