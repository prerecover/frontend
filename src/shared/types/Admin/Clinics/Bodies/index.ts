import { EnModes } from '../../shared/Entities/Modes';
import { TAddBody } from './Add';
import { TEditBody } from './Edit';
import { TViewBody } from './ViewEdit';

export type TClinicsBody<M extends EnModes> = M extends EnModes.view
  ? TViewBody
  : M extends EnModes.edit
    ? TEditBody
    : M extends EnModes.add
      ? TAddBody
      : never;
