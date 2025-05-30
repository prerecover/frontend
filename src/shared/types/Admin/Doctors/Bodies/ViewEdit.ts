import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TInlineView } from '../../shared/cells/Inline';
import { TInlineAreaView } from '../../shared/cells/InlineArea';
import { TMultiselectView } from '../../shared/cells/Multiselect';
import { TNetView } from '../../shared/cells/Net';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from '../FloatCellTypes/MultiselectSearch';
import { TServiceItem } from '../data-structure';
import { EnWorkDays } from '../entities/WorkDays';

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
        cellType: EnMultiselectTypes.workDays;
        data: TMultiselectView<string, EnWorkDays>;
      }
    | {
        cellType: EnMultiselectSearchTypes.services;
        data: TMultiselectView<Omit<TServiceItem, 'id'>, TServiceItem['id']>;
      }
    | {
        cellType: EnCellTypes.action;
        data: null;
      }
  ) & {
    fieldName: string;
  })[];
}[];
