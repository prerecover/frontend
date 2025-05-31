import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TInlineAdd } from '../../shared/Cells/Inline';
import { TInlineAreaAdd } from '../../shared/Cells/InlineArea';
import { TMultiselectAdd } from '../../shared/Cells/Multiselect';
import { TNetAdd } from '../../shared/Cells/Net';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from '../FloatCellTypes/MultiselectSearch';
import { TDoctorItem } from '../data-structure';
import { EnPayType } from '../Entities/PayType';

export type TAddBody = {
  id: string;
  mode: EnModes.add;
  data: ((
    | {
        cellType: EnCellTypes.inline;
        data: TInlineAdd;
      }
    | {
        cellType: EnCellTypes.net;
        data: TNetAdd;
      }
    | {
        cellType: EnCellTypes.inlineArea;
        data: TInlineAreaAdd;
      }
    | {
        cellType: EnMultiselectTypes.payType;
        data: TMultiselectAdd<string, EnPayType>;
      }
    | {
        cellType: EnMultiselectSearchTypes.doctors;
        data: TMultiselectAdd<Omit<TDoctorItem, 'id'>, TDoctorItem['id']>;
      }
    | {
        cellType: EnCellTypes.action;
        data: null;
      }
  ) & {
    fieldName?: string;
  })[];
}[];
