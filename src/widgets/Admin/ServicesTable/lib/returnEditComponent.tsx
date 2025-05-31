import { ServicesActionsCell } from '@/entities/Admin/Admin/ServicesActionsCell';
import { InlineAreaCell } from '@/entities/Admin/Admin/InlineAreaCell';
import { InlineCell } from '@/entities/Admin/Admin/InlineCell';
import { NetCell } from '@/entities/Admin/Admin/NetCell';
import { ServicesDoctorsMultiselectSearchCell } from '@/entities/Admin/Admin/ServicesDoctorsMultiselectSearchCell';
import { ServicesPayTypeMultiselectCell } from '@/entities/Admin/Admin/ServicesPayTypeMultiselectCell';
import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnMultiselectTypes } from '@/shared/types/Admin/Services/FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from '@/shared/types/Admin/Services/FloatCellTypes/MultiselectSearch';
import { TServicesAllCellTypes } from '@/shared/types/Admin/Services/AllCellTypes';
import { EnPayType } from '@/shared/types/Admin/services/entities/PayType';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';
import { TBodyItemId } from '@/shared/types/Admin/shared/Utils/BodyItemId';
import { TUpdateFuncField } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { TCellIndexField } from '@/shared/types/Admin/shared/Utils/CellIndex';
import { TInlineEdit } from '@/shared/types/Admin/shared/cells/Inline';
import { TInlineAreaEdit } from '@/shared/types/Admin/shared/cells/InlineArea';
import { TMultiselectEdit } from '@/shared/types/Admin/shared/cells/Multiselect';
import { TNetEdit } from '@/shared/types/Admin/shared/cells/Net';
import { TEditData as TMultiselectSearchEditData } from '@/entities/Admin/Admin/ServicesDoctorsMultiselectSearchCell/types/Data';

interface Params
  extends TCellIndexField,
    TUpdateFuncField<EnTableTypes.services, unknown> {
  mode: EnModes.edit;
  cellType: TServicesAllCellTypes;
  data: unknown;
  id: TBodyItemId<EnTableTypes.services>;
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
        <InlineCell<EnModes.edit, EnTableTypes.services>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineEdit}
          mode={mode}
          id={id}
        />
      );
    case EnCellTypes.action:
      return <ServicesActionsCell<EnModes.edit> id={id} mode={mode} />;

    case EnCellTypes.inlineArea:
      return (
        <InlineAreaCell<EnModes.edit, EnTableTypes.services>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TInlineAreaEdit}
          mode={mode}
          id={id}
        />
      );

    case EnCellTypes.net:
      return (
        <NetCell<EnModes.edit, EnTableTypes.services>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TNetEdit}
          mode={mode}
          id={id}
        />
      );

    case EnMultiselectTypes.payType:
      return (
        <ServicesPayTypeMultiselectCell<EnModes.edit>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TMultiselectEdit<string, EnPayType>}
          mode={mode}
          id={id}
        />
      );

    case EnMultiselectSearchTypes.doctors:
      return (
        <ServicesDoctorsMultiselectSearchCell<EnModes.edit>
          updateFunc={updateFunc}
          cellIndex={cellIndex}
          data={data as TMultiselectSearchEditData}
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
