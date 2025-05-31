import { ServicesActionsCell } from '@/entities/Admin/Admin/ServicesActionsCell';

import { InlineCell } from '@/entities/Admin/Admin/InlineCell';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TServicesAllCellTypes } from '@/shared/types/Admin/Services/AllCellTypes';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { TInlineView } from '@/shared/types/Admin/shared/Cells/Inline';
import { InlineAreaCell } from '@/entities/Admin/Admin/InlineAreaCell';
import { NetCell } from '@/entities/Admin/Admin/NetCell';
import { ServicesPayTypeMultiselectCell } from '@/entities/Admin/Admin/ServicesPayTypeMultiselectCell';
import { ServicesDoctorsMultiselectSearchCell } from '@/entities/Admin/Admin/ServicesDoctorsMultiselectSearchCell';
import { TMultiselectView } from '@/shared/types/Admin/shared/Cells/Multiselect';
import { EnPayType } from '@/shared/types/Admin/Services/Entities/PayType';
import { EnMultiselectTypes } from '@/shared/types/Admin/Services/FloatCellTypes/Multiselect';
import { TNetView } from '@/shared/types/Admin/shared/Cells/Net';
import { EnMultiselectSearchTypes } from '@/shared/types/Admin/Services/FloatCellTypes/MultiselectSearch';
import { TInlineAreaView } from '@/shared/types/Admin/shared/Cells/InlineArea';
import { TViewData as TMultiselectSearchViewData } from '@/entities/Admin/Admin/ServicesDoctorsMultiselectSearchCell/types/Data';

interface Params extends TCellIndexField {
  mode: EnModes.view;
  cellType: TServicesAllCellTypes;
  data: unknown;
  id: TBodyItemId<EnTableTypes.services>;
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
        <InlineCell<EnModes.view, EnTableTypes.services>
          cellIndex={cellIndex}
          data={data as TInlineView}
          mode={mode}
        />
      );
    case EnCellTypes.action:
      return <ServicesActionsCell<EnModes.view> id={id} mode={mode} />;

    case EnCellTypes.inlineArea:
      return (
        <InlineAreaCell<EnModes.view, EnTableTypes.services>
          cellIndex={cellIndex}
          data={data as TInlineAreaView}
          mode={mode}
        />
      );

    case EnCellTypes.net:
      return (
        <NetCell<EnModes.view, EnTableTypes.services>
          cellIndex={cellIndex}
          data={data as TNetView}
          mode={mode}
        />
      );

    case EnMultiselectTypes.payType:
      return (
        <ServicesPayTypeMultiselectCell<EnModes.view>
          cellIndex={cellIndex}
          data={data as TMultiselectView<string, EnPayType>}
          mode={mode}
        />
      );

    case EnMultiselectSearchTypes.doctors:
      return (
        <ServicesDoctorsMultiselectSearchCell<EnModes.view>
          cellIndex={cellIndex}
          data={data as TMultiselectSearchViewData}
          mode={mode}
        />
      );

    default:
      throw new Error(`Некорректный cellType для ServicesTable. Был получен ${cellType}. Поле cellType может быть только следующими данными: cellType:
      | EnCellTypes.inline
      | EnCellTypes.action
      | EnCellTypes.net
      | EnCellTypes.inlineArea
      | EnMultiselectTypes.payType
      | EnMultiselectSearchTypes.doctors;`);
  }
};
