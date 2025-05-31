import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TInlineAdd } from '../../shared/Cells/Inline';
import { TInlineAreaAdd } from '../../shared/Cells/InlineArea';
import { TMultiselectAdd } from '../../shared/Cells/Multiselect';
import { TNetAdd } from '../../shared/Cells/Net';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from '../FloatCellTypes/MultiselectSearch';
import { TServiceItem } from '../data-structure';
import { EnWorkDays } from '../Entities/WorkDays';

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
        cellType: EnMultiselectTypes.workDays;
        data: TMultiselectAdd<string, EnWorkDays>;
      }
    | {
        cellType: EnMultiselectSearchTypes.services;
        data: TMultiselectAdd<Omit<TServiceItem, 'id'>, TServiceItem['id']>;
      }
    | {
        cellType: EnCellTypes.action;
        data: null;
      }
  ) & {
    fieldName?: string;
  })[];
}[];
