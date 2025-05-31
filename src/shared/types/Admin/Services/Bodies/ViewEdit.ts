import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TInlineView } from '../../shared/Cells/Inline';
import { TInlineAreaView } from '../../shared/Cells/InlineArea';
import { TMultiselectView } from '../../shared/Cells/Multiselect';
import { TNetView } from '../../shared/Cells/Net';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from '../FloatCellTypes/MultiselectSearch';
import { TDoctorItem } from '../data-structure';
import { EnPayType } from '../Entities/PayType';

export type TViewEditBody = {
  id: string;
  mode: EnModes.view | EnModes.edit;
  data: ((
    | {
        cellType: EnCellTypes.inline;
        data: TInlineView;
      }
    | {
        cellType: EnCellTypes.net;
        data: TNetView;
      }
    | {
        cellType: EnCellTypes.inlineArea;
        data: TInlineAreaView;
      }
    | {
        cellType: EnMultiselectTypes.payType;
        data: TMultiselectView<string, EnPayType>;
      }
    | {
        cellType: EnMultiselectSearchTypes.doctors;
        data: TMultiselectView<Omit<TDoctorItem, 'id'>, TDoctorItem['id']>;
      }
  ) & {
    fieldName?: string;
  })[];
}[];
