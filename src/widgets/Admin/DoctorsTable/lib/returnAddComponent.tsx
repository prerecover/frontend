import { InlineAreaCell } from '@/entities/Admin/Admin/InlineAreaCell';
import { InlineCell } from '@/entities/Admin/Admin/InlineCell';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { TUpdateFuncField } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { TInlineAdd } from '@/shared/types/Admin/shared/cells/Inline';
import { TInlineAreaAdd } from '@/shared/types/Admin/shared/cells/InlineArea';
import { TDoctorsAllCellTypes } from '@/shared/types/Admin/Doctors/AllCellTypes';
import { DoctorsActionsCell } from '@/entities/Admin/Admin/DoctorsActionsCell';
import { NetCell } from '@/entities/Admin/Admin/NetCell';
import { TNetAdd } from '@/shared/types/Admin/shared/cells/Net';
import { EnMultiselectTypes } from '@/shared/types/Admin/Doctors/FloatCellTypes/Multiselect';
import { DoctorsWorkDaysMultiselectCell } from '@/entities/Admin/Admin/DoctorsWorkDaysMultiselectCell';
import { TMultiselectAdd } from '@/shared/types/Admin/shared/cells/Multiselect';
import { EnWorkDays } from '@/shared/types/Admin/Doctors/entities/WorkDays';
import { EnMultiselectSearchTypes } from '@/shared/types/Admin/Doctors/FloatCellTypes/MultiselectSearch';
import { DoctorsServicesMultiselectSearchCell } from '@/entities/Admin/Admin/DoctorsServicesMultiselectSearchCell';
import { TAddData as TDoctorsServicesMultiselectSearchAddData } from '@/entities/Admin/Admin/DoctorsServicesMultiselectSearchCell/types/Data';

interface Params
  extends TCellIndexField,
    TUpdateFuncField<EnTableTypes.doctors, unknown> {
  mode: EnModes.add;
  cellType: TDoctorsAllCellTypes;
  data: unknown;
  id: TBodyItemId<EnTableTypes.doctors>;
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
        <InlineCell<EnModes.add, EnTableTypes.doctors>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineAdd}
          mode={mode}
          id={id}
        />
      );
    case EnCellTypes.action:
      return <DoctorsActionsCell<EnModes.add> id={id} mode={mode} />;

    case EnCellTypes.inlineArea:
      return (
        <InlineAreaCell<EnModes.add, EnTableTypes.doctors>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineAreaAdd}
          mode={mode}
          id={id}
        />
      );

    case EnCellTypes.net:
      return (
        <NetCell<EnModes.add, EnTableTypes.doctors>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TNetAdd}
          mode={mode}
          id={id}
        />
      );

    case EnMultiselectTypes.workDays:
      return (
        <DoctorsWorkDaysMultiselectCell<EnModes.add>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TMultiselectAdd<string, EnWorkDays>}
          mode={mode}
          id={id}
        />
      );

    case EnMultiselectSearchTypes.services:
      return (
        <DoctorsServicesMultiselectSearchCell<EnModes.add>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TDoctorsServicesMultiselectSearchAddData}
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
