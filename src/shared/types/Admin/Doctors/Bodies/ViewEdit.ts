import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TInlineView } from '../../shared/Cells/Inline';
import { TInlineAreaView } from '../../shared/Cells/InlineArea';
import { TMultiselectView } from '../../shared/Cells/Multiselect';
import { TNetView } from '../../shared/Cells/Net';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from '../FloatCellTypes/MultiselectSearch';
import { TServiceItem } from '../data-structure';
import { EnWorkDays } from '../Entities/WorkDays';

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
    fieldName?: string;
  })[];
}[];
