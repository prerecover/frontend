import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TAccumulatorView } from '../../shared/Cells/Accumulator';
import { THasView } from '../../shared/Cells/Has';
import { TInlineView } from '../../shared/Cells/Inline';
import { TInlineAreaView } from '../../shared/Cells/InlineArea';
import { TLinkView } from '../../shared/Cells/Link';
import { TMultiselectView } from '../../shared/Cells/Multiselect';
import { TWorkTimeView } from '../../shared/Cells/WorkTime';
import { EnAccumulator } from '../FloatCellTypes/Accumulator';
import { EnLinks } from '../FloatCellTypes/Links';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { TClinicsDataStructure, TClinicsNetItem } from '../data-structure';
import { EnLanguages } from '../Entities/Languages';
import { TDefaultView } from '../../shared/Cells/Default';

export type TViewEditBody = {
  id: TClinicsDataStructure['id'];
  mode: EnModes.view | EnModes.edit;
  data: ((
    | {
        cellType: EnCellTypes.inline;
        data: TInlineView;
      }
    | {
        cellType: EnCellTypes.inlineArea;
        data: TInlineAreaView;
      }
    | {
        cellType: EnCellTypes.has;
        data: THasView;
      }
    | {
        cellType: EnMultiselectTypes.language;
        data: TMultiselectView<string, EnLanguages>;
      }
    | {
        cellType: EnLinks.services;
        data: TLinkView<TClinicsDataStructure['servicesQnt']>;
      }
    | {
        cellType: EnLinks.doctors;
        data: TLinkView<TClinicsDataStructure['doctorsQnt']>;
      }
    | {
        cellType: EnAccumulator.clinicsNet;
        data: TAccumulatorView<{ data: TClinicsNetItem[] }>;
      }
    | {
        cellType: EnCellTypes.action;
        data: null;
      }
    | {
        cellType: EnCellTypes.workTime;
        data: TWorkTimeView;
      }
    | {
        cellType: EnCellTypes.default;
        data: TDefaultView;
      }
  ) & {
    fieldName: string;
  })[];
}[];
