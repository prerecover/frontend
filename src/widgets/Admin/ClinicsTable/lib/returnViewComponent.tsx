import { ClinicsActionsCell } from '@/entities/Admin/Admin/ClinicsActionsCell';
import { ClinicsDoctorsLink } from '@/entities/Admin/Admin/ClinicsDoctorsLink';
import {
  ClinicsNetAccumulatorCell,
  TClinicsNetAccumulatorData,
} from '@/entities/Admin/Admin/ClinicsNetAccumulatorCell';
import { ClinicsServicesLink } from '@/entities/Admin/Admin/ClinicsServicesLink';
import { HasCell } from '@/entities/Admin/Admin/HasCell/ui';
import { InlineCell } from '@/entities/Admin/Admin/InlineCell';
import { MultiselectLanguagesCell } from '@/entities/Admin/Admin/MultiselectLanguagesCell/ui';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TClinicsAllCellTypes } from '@/shared/types/Admin/Clinics/AllCellTypes';
import { EnAccumulator } from '@/shared/types/Admin/Clinics/FloatCellTypes/Accumulator';
import { EnLinks } from '@/shared/types/Admin/Clinics/FloatCellTypes/Links';
import { EnMultiselectTypes } from '@/shared/types/Admin/Clinics/FloatCellTypes/Multiselect';
import { EnLanguages } from '@/shared/types/Admin/Clinics/entities/Languages';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { TAccumulatorView } from '@/shared/types/Admin/shared/cells/Accumulator';
import { THasView } from '@/shared/types/Admin/shared/cells/Has';
import { TInlineView } from '@/shared/types/Admin/shared/cells/Inline';
import { TLinkView } from '@/shared/types/Admin/shared/cells/Link';
import { TMultiselectView } from '@/shared/types/Admin/shared/cells/Multiselect';

interface Params extends TCellIndexField {
  mode: EnModes.view;
  cellType: TClinicsAllCellTypes;
  data: unknown;
  id: TBodyItemId<EnTableTypes.clinics>;
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
        <InlineCell<EnModes.view, EnTableTypes.clinics>
          cellIndex={cellIndex}
          data={data as TInlineView}
          mode={mode}
        />
      );
    case EnCellTypes.action:
      return <ClinicsActionsCell<EnModes.view> id={id} mode={mode} />;
    case EnCellTypes.has:
      return (
        <HasCell<EnModes.view, EnTableTypes.clinics>
          cellIndex={cellIndex}
          data={data as THasView}
          mode={mode}
        />
      );
    case EnCellTypes.inlineArea:
      return 1;
    case EnMultiselectTypes.language:
      return (
        <MultiselectLanguagesCell<EnModes.view, EnTableTypes.clinics>
          cellIndex={cellIndex}
          data={data as TMultiselectView<string, EnLanguages>}
          mode={mode}
        />
      );
    case EnAccumulator.clinicsNet:
      return (
        <ClinicsNetAccumulatorCell<EnModes.view>
          data={data as TAccumulatorView<TClinicsNetAccumulatorData>}
          mode={mode}
        />
      );
    case EnLinks.doctors:
      return (
        <ClinicsDoctorsLink<EnModes.view>
          data={data as TLinkView<{ qnt: number }>}
          mode={mode}
        />
      );
    case EnLinks.services:
      return (
        <ClinicsServicesLink<EnModes.view>
          data={data as TLinkView<{ qnt: number }>}
          mode={mode}
        />
      );
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
