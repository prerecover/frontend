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
import { TServicesAllCellTypes } from '@/shared/types/Admin/Services/AllCellTypes';
import { ServicesActionsCell } from '@/entities/Admin/Admin/ServicesActionsCell';
import { NetCell } from '@/entities/Admin/Admin/NetCell';
import { TNetAdd } from '@/shared/types/Admin/shared/cells/Net';
import { EnMultiselectTypes } from '@/shared/types/Admin/Services/FloatCellTypes/Multiselect';
import { ServicesPayTypeMultiselectCell } from '@/entities/Admin/Admin/ServicesPayTypeMultiselectCell';
import { TMultiselectAdd } from '@/shared/types/Admin/shared/cells/Multiselect';
import { EnPayType } from '@/shared/types/Admin/services/entities/PayType';
import { EnMultiselectSearchTypes } from '@/shared/types/Admin/Services/FloatCellTypes/MultiselectSearch';
import { ServicesDoctorsMultiselectSearchCell } from '@/entities/Admin/Admin/ServicesDoctorsMultiselectSearchCell';
import { TAddData as TMultiselectSearchAddData } from '@/entities/Admin/Admin/ServicesDoctorsMultiselectSearchCell/types/Data';

interface Params
  extends TCellIndexField,
    TUpdateFuncField<EnTableTypes.services, unknown> {
  mode: EnModes.add;
  cellType: TServicesAllCellTypes;
  data: unknown;
  id: TBodyItemId<EnTableTypes.services>;
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
        <InlineCell<EnModes.add, EnTableTypes.services>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineAdd}
          mode={mode}
          id={id}
        />
      );
    case EnCellTypes.action:
      return <ServicesActionsCell<EnModes.add> id={id} mode={mode} />;

    case EnCellTypes.inlineArea:
      return (
        <InlineAreaCell<EnModes.add, EnTableTypes.services>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineAreaAdd}
          mode={mode}
          id={id}
        />
      );

    case EnCellTypes.net:
      return (
        <NetCell<EnModes.add, EnTableTypes.services>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TNetAdd}
          mode={mode}
          id={id}
        />
      );

    case EnMultiselectTypes.payType:
      return (
        <ServicesPayTypeMultiselectCell<EnModes.add>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TMultiselectAdd<string, EnPayType>}
          mode={mode}
          id={id}
        />
      );

    case EnMultiselectSearchTypes.doctors:
      return (
        <ServicesDoctorsMultiselectSearchCell<EnModes.add>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TMultiselectSearchAddData}
          mode={mode}
          id={id}
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
