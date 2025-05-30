import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TInlineAdd } from '../../shared/cells/Inline';
import { TInlineAreaAdd } from '../../shared/cells/InlineArea';
import { TMultiselectAdd } from '../../shared/cells/Multiselect';
import { TNetAdd } from '../../shared/cells/Net';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from '../FloatCellTypes/MultiselectSearch';
import { TServiceItem } from '../data-structure';
import { EnWorkDays } from '../entities/WorkDays';

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
    fieldName: string;
  })[];
}[];
