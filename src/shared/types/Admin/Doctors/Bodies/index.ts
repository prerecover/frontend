import { EnModes } from '../../shared/Entities/Modes';
import { TAddBody } from './Add';
import { TViewEditBody } from './ViewEdit';

export type TDoctorsBody<M extends EnModes> = M extends EnModes.view_edit
  ? TViewEditBody
  : M extends EnModes.add
    ? TAddBody
    : never;
