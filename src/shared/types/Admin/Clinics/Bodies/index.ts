import { EnModes } from '../../shared/Entities/Modes';
import { TAddBody } from './Add';
import { TViewEditBody } from './ViewEdit';

export type TClinicsBody<M extends EnModes> = M extends
  | EnModes.view
  | EnModes.edit
  ? TViewEditBody
  : M extends EnModes.add
    ? TAddBody
    : never;
