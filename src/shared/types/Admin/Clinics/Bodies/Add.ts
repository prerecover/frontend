import { TClinicsNetAccumulatorData } from '@/entities/Admin/Admin/ClinicsNetAccumulatorCell';
import { EnCellTypes } from '../../shared/Entities/CellTypes';
import { EnModes } from '../../shared/Entities/Modes';
import { TAccumulatorAdd } from '../../shared/Cells/Accumulator';
import { THasAdd } from '../../shared/Cells/Has';
import { TInlineAdd } from '../../shared/Cells/Inline';
import { TInlineAreaAdd } from '../../shared/Cells/InlineArea';
import { TLinkAdd } from '../../shared/Cells/Link';
import { TMultiselectAdd } from '../../shared/Cells/Multiselect';
import { EnAccumulator } from '../FloatCellTypes/Accumulator';
import { EnLinks } from '../FloatCellTypes/Links';
import { EnMultiselectTypes } from '../FloatCellTypes/Multiselect';
import { TClinicsDataStructure } from '../data-structure';
import { EnLanguages } from '../Entities/Languages';
import { TWorkTimeAdd } from '../../shared/Cells/WorkTime';
import { TDefaultAdd } from '../../shared/Cells/Default';

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
        data: TAccumulatorAdd<TClinicsNetAccumulatorData>;
      }
    | {
        cellType: EnCellTypes.action;
        data: null;
      }
    | {
        cellType: EnCellTypes.workTime;
        data: TWorkTimeAdd;
      }
    | {
        cellType: EnCellTypes.default;
        data: TDefaultAdd;
      }
  ) & {
    fieldName?: string;
  })[];
}[];
