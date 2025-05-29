import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TAccumulatorView } from '../../shared/cells/Accumulator';
import { THasView } from '../../shared/cells/Has';
import { TInlineView } from '../../shared/cells/Inline';
import { TInlineAreaView } from '../../shared/cells/InlineArea';
import { TLinkView } from '../../shared/cells/Link';
import { TMultiselectView } from '../../shared/cells/Multiselect';
import { EnAccumulator } from '../FloatCellTypes/Accumulator';
import { EnLinks } from '../FloatCellTypes/Links';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { TClinicsNetItem } from '../data-structure';
import { EnLanguages } from '../entities/Languages';

export type TViewEditBody = {
  id: string;
  mode: EnModes.view | EnModes.edit;
  data: (
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
        data: TLinkView<{
          qnt: number;
        }>;
      }
    | {
        cellType: EnLinks.doctors;
        data: TLinkView<{
          qnt: number;
        }>;
      }
    | {
        cellType: EnAccumulator.clinicsNet;
        data: TAccumulatorView<{ data: TClinicsNetItem[] }>;
      }
    | {
        cellType: EnCellTypes.action;
        data: null;
      }
  )[];
}[];
