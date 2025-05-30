import { ClinicsActionsCell } from '@/entities/Admin/Admin/ClinicsActionsCell';
import { ClinicsDoctorsLink } from '@/entities/Admin/Admin/ClinicsDoctorsLink';
import { ClinicsServicesLink } from '@/entities/Admin/Admin/ClinicsServicesLink';
import { HasCell } from '@/entities/Admin/Admin/HasCell/ui';
import { InlineAreaCell } from '@/entities/Admin/Admin/InlineAreaCell';
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
import { TUpdateFuncField } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { THasAdd } from '@/shared/types/Admin/shared/cells/Has';
import { TInlineAdd } from '@/shared/types/Admin/shared/cells/Inline';
import { TInlineAreaAdd } from '@/shared/types/Admin/shared/cells/InlineArea';
import { TLinkAdd } from '@/shared/types/Admin/shared/cells/Link';
import { TMultiselectAdd } from '@/shared/types/Admin/shared/cells/Multiselect';

interface Params
  extends TCellIndexField,
    TUpdateFuncField<EnTableTypes.clinics, unknown> {
  mode: EnModes.add;
  cellType: TClinicsAllCellTypes;
  data: unknown;
  id: TBodyItemId<EnTableTypes.clinics>;
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
      return (
        <InlineAreaCell<EnModes.add, EnTableTypes.clinics>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineAreaAdd}
          mode={mode}
          id={id}
        />
      );
    case EnMultiselectTypes.language:
      return (
        <MultiselectLanguagesCell<EnModes.add, EnTableTypes.clinics>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TMultiselectAdd<string, EnLanguages>}
          mode={mode}
          id={id}
        />
      );
    case EnAccumulator.clinicsNet:
      return 1;
    case EnLinks.doctors:
      return (
        <ClinicsDoctorsLink<EnModes.add>
          data={data as TLinkAdd}
          mode={mode}
          cellIndex={cellIndex}
          id={id}
          updateFunc={updateFunc}
        />
      );
    case EnLinks.services:
      return (
        <ClinicsServicesLink<EnModes.add>
          data={data as TLinkAdd}
          mode={mode}
          cellIndex={cellIndex}
          id={id}
          updateFunc={updateFunc}
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
