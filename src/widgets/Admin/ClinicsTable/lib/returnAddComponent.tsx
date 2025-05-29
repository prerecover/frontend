import { ClinicsActionsCell } from '@/entities/Admin/Admin/ClinicsActionsCell';
import { HasCell } from '@/entities/Admin/Admin/HasCell/ui';
import { InlineCell } from '@/entities/Admin/Admin/InlinceCell';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TClinicsBody } from '@/shared/types/Admin/Clinics/Bodies';
import { EnAccumulator } from '@/shared/types/Admin/Clinics/FloatCellTypes/Accumulator';
import { EnLinks } from '@/shared/types/Admin/Clinics/FloatCellTypes/Links';
import { EnMultiselectTypes } from '@/shared/types/Admin/Clinics/FloatCellTypes/Multiselect';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TUpdateFuncField } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { THasAdd } from '@/shared/types/Admin/shared/cells/Has';
import { TInlineAdd } from '@/shared/types/Admin/shared/cells/Inline';

interface Params
  extends TCellIndexField,
    TUpdateFuncField<EnTableTypes.clinics, unknown> {
  mode: EnModes.add;
  cellType:
    | EnCellTypes.inline
    | EnCellTypes.action
    | EnCellTypes.has
    | EnCellTypes.inlineArea
    | EnMultiselectTypes.language
    | EnAccumulator.clinicsNet
    | EnLinks.doctors
    | EnLinks.services;
  data: unknown;
  id: TClinicsBody<EnModes.add>[0]['id'];
}

export const returnAddComponent = ({
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
        <InlineCell<EnModes.add, EnTableTypes.clinics>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineAdd}
          mode={mode}
          id={id}
        />
      );
    case EnCellTypes.action:
      return <ClinicsActionsCell<EnModes.add> id={id} mode={mode} />;
    case EnCellTypes.has:
      return (
        <HasCell<EnModes.add, EnTableTypes.clinics>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as THasAdd}
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
