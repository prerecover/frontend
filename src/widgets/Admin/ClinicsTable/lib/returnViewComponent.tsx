import { ClinicsActionsCell } from '@/entities/Admin/Admin/ClinicsActionsCell';
import { HasCell } from '@/entities/Admin/Admin/HasCell/ui';
import { InlineCell } from '@/entities/Admin/Admin/InlinceCell';
import { TClinicsBody } from '@/shared/types/Admin/Clinics/Bodies';
import { EnAccumulator } from '@/shared/types/Admin/Clinics/FloatCellTypes/Accumulator';
import { EnLinks } from '@/shared/types/Admin/Clinics/FloatCellTypes/Links';
import { EnMultiselectTypes } from '@/shared/types/Admin/Clinics/FloatCellTypes/Multiselect';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { THasView } from '@/shared/types/Admin/shared/cells/Has';
import { TInlineView } from '@/shared/types/Admin/shared/cells/Inline';

interface Params extends TCellIndexField {
  mode: EnModes.view;
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
  id: TClinicsBody<EnModes.view>[0]['id'];
}

export const returnViewComponent = ({
  cellIndex,
  cellType,
  mode,
  data,
  id,
}: Params) => {
  switch (cellType) {
    case EnCellTypes.inline:
      return (
        <InlineCell<EnModes.view>
          cellIndex={cellIndex}
          data={data as TInlineView}
          mode={mode}
        />
      );
    case EnCellTypes.action:
      return <ClinicsActionsCell<EnModes.view> id={id} mode={mode} />;
    case EnCellTypes.has:
      return (
        <HasCell<EnModes.view>
          cellIndex={cellIndex}
          data={data as THasView}
          mode={mode}
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
