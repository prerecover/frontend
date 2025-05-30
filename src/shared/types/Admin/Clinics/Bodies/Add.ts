import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TAccumulatorAdd } from '../../shared/cells/Accumulator';
import { THasAdd } from '../../shared/cells/Has';
import { TInlineAdd } from '../../shared/cells/Inline';
import { TInlineAreaAdd } from '../../shared/cells/InlineArea';
import { TLinkAdd } from '../../shared/cells/Link';
import { TMultiselectAdd } from '../../shared/cells/Multiselect';
import { EnAccumulator } from '../FloatCellTypes/Accumulator';
import { EnLinks } from '../FloatCellTypes/Links';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { TClinicsDataStructure } from '../data-structure';
import { EnLanguages } from '../entities/Languages';

export type TAddBody = {
  id: TClinicsDataStructure['id'];
  mode: EnModes.add;
  data: ((
    | {
        cellType: EnCellTypes.inline;
        data: TInlineAdd;
      }
    | {
        cellType: EnCellTypes.inlineArea;
        data: TInlineAreaAdd;
      }
    | {
        cellType: EnCellTypes.has;
        data: THasAdd;
      }
    | {
        cellType: EnMultiselectTypes.language;
        data: TMultiselectAdd<string, EnLanguages>;
      }
    | {
        cellType: EnLinks.services;
        data: TLinkAdd;
      }
    | {
        cellType: EnLinks.doctors;
        data: TLinkAdd;
      }
    | {
        cellType: EnAccumulator.clinicsNet;
        data: TAccumulatorAdd;
      }
    | {
        cellType: EnCellTypes.action;
        data: null;
      }
  ) & {
    fieldName?: string;
  })[];
}[];
