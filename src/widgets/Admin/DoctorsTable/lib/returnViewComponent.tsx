import { DoctorsActionsCell } from '@/entities/Admin/Admin/DoctorsActionsCell';

import { InlineCell } from '@/entities/Admin/Admin/InlineCell';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { TInlineView } from '@/shared/types/Admin/shared/Cells/Inline';
import { InlineAreaCell } from '@/entities/Admin/Admin/InlineAreaCell';
import { NetCell } from '@/entities/Admin/Admin/NetCell';
import { TMultiselectView } from '@/shared/types/Admin/shared/Cells/Multiselect';
import { EnMultiselectTypes } from '@/shared/types/Admin/Doctors/FloatCellTypes/Multiselect';
import { TNetView } from '@/shared/types/Admin/shared/Cells/Net';
import { EnMultiselectSearchTypes } from '@/shared/types/Admin/Doctors/FloatCellTypes/MultiselectSearch';
import { TInlineAreaView } from '@/shared/types/Admin/shared/Cells/InlineArea';
import { TViewData as TMultiselectSearchViewData } from '@/entities/Admin/Admin/DoctorsServicesMultiselectSearchCell/types/Data';
import { TDoctorsAllCellTypes } from '@/shared/types/Admin/Doctors/AllCellTypes';
import { EnWorkDays } from '@/shared/types/Admin/Doctors/Entities/WorkDays';
import { DoctorsWorkDaysMultiselectCell } from '@/entities/Admin/Admin/DoctorsWorkDaysMultiselectCell';
import { DoctorsServicesMultiselectSearchCell } from '@/entities/Admin/Admin/DoctorsServicesMultiselectSearchCell';

interface Params extends TCellIndexField {
  mode: EnModes.view;
  cellType: TDoctorsAllCellTypes;
  data: unknown;
  id: TBodyItemId<EnTableTypes.doctors>;
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
        <InlineCell<EnModes.view, EnTableTypes.doctors>
          cellIndex={cellIndex}
          data={data as TInlineView}
          mode={mode}
        />
      );
    case EnCellTypes.action:
      return <DoctorsActionsCell<EnModes.view> id={id} mode={mode} />;

    case EnCellTypes.inlineArea:
      return (
        <InlineAreaCell<EnModes.view, EnTableTypes.doctors>
          cellIndex={cellIndex}
          data={data as TInlineAreaView}
          mode={mode}
        />
      );

    case EnCellTypes.net:
      return (
        <NetCell<EnModes.view, EnTableTypes.doctors>
          cellIndex={cellIndex}
          data={data as TNetView}
          mode={mode}
        />
      );

    case EnMultiselectTypes.workDays:
      return (
        <DoctorsWorkDaysMultiselectCell<EnModes.view>
          cellIndex={cellIndex}
          data={data as TMultiselectView<string, EnWorkDays>}
          mode={mode}
        />
      );

    case EnMultiselectSearchTypes.services:
      return (
        <DoctorsServicesMultiselectSearchCell<EnModes.view>
          cellIndex={cellIndex}
          data={data as TMultiselectSearchViewData}
          mode={mode}
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
