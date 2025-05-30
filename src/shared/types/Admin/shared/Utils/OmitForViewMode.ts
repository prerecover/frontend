import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '../Entities/Modes';
import { TCellDataUpdate } from './CellDataUpdate';

export type OmitForViewMode<
  M extends EnModes,
  T extends EnTableTypes,
  O extends string | symbol | number | never = never,
  AM extends EnModes | never = never,
> = M extends EnModes.view | AM
  ? Omit<TCellDataUpdate<M, T, string>, 'updateFunc' | 'id' | O>
  : TCellDataUpdate<M, T, string>;
