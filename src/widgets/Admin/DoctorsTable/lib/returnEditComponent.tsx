import { DoctorsActionsCell } from '@/entities/Admin/Admin/DoctorsActionsCell';
import { InlineAreaCell } from '@/entities/Admin/Admin/InlineAreaCell';
import { InlineCell } from '@/entities/Admin/Admin/InlineCell';
import { NetCell } from '@/entities/Admin/Admin/NetCell';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnMultiselectSearchTypes } from '@/shared/types/Admin/Doctors/FloatCellTypes/MultiselectSearch';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { TUpdateFuncField } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { TInlineEdit } from '@/shared/types/Admin/shared/cells/Inline';
import { TInlineAreaEdit } from '@/shared/types/Admin/shared/cells/InlineArea';
import { TMultiselectEdit } from '@/shared/types/Admin/shared/cells/Multiselect';
import { TNetEdit } from '@/shared/types/Admin/shared/cells/Net';
import { DoctorsWorkDaysMultiselectCell } from '@/entities/Admin/Admin/DoctorsWorkDaysMultiselectCell';
import { DoctorsServicesMultiselectSearchCell } from '@/entities/Admin/Admin/DoctorsServicesMultiselectSearchCell';
import { EnWorkDays } from '@/shared/types/Admin/Doctors/entities/WorkDays';
import { TEditData as TMultiselectSearchEditData } from '@/entities/Admin/Admin/DoctorsServicesMultiselectSearchCell/types/Data';
import { EnMultiselectTypes } from '@/shared/types/Admin/Doctors/FloatCellTypes/Multiselect';
import { TDoctorsAllCellTypes } from '@/shared/types/Admin/Doctors/AllCellTypes';

interface Params
  extends TCellIndexField,
    TUpdateFuncField<EnTableTypes.doctors, unknown> {
  mode: EnModes.edit;
  cellType: TDoctorsAllCellTypes;
  data: unknown;
  id: TBodyItemId<EnTableTypes.doctors>;
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
        <InlineCell<EnModes.edit, EnTableTypes.doctors>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineEdit}
          mode={mode}
          id={id}
        />
      );
    case EnCellTypes.action:
      return <DoctorsActionsCell<EnModes.edit> id={id} mode={mode} />;

    case EnCellTypes.inlineArea:
      return (
        <InlineAreaCell<EnModes.edit, EnTableTypes.doctors>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineAreaEdit}
          mode={mode}
          id={id}
        />
      );

    case EnCellTypes.net:
      return (
        <NetCell<EnModes.edit, EnTableTypes.doctors>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TNetEdit}
          mode={mode}
          id={id}
        />
      );

    case EnMultiselectTypes.workDays:
      return (
        <DoctorsWorkDaysMultiselectCell<EnModes.edit>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TMultiselectEdit<string, EnWorkDays>}
          mode={mode}
          id={id}
        />
      );

    case EnMultiselectSearchTypes.services:
      return (
        <DoctorsServicesMultiselectSearchCell<EnModes.edit>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TMultiselectSearchEditData}
          mode={mode}
          id={id}
        />
      );

    default:
      throw new Error(`Некорректный cellType для DoctorsTable. Был получен ${cellType}. Поле cellType может быть только следующими данными: cellType:
		| EnCellTypes.inline
		| EnCellTypes.action
		| EnCellTypes.net
		| EnCellTypes.inlineArea
		| EnMultiselectTypes.payType
		| EnMultiselectSearchTypes.doctors;`);
  }
};
