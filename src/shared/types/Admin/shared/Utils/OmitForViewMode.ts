import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '../Entities/Modes';
import { TCellDataUpdate } from './CellDataUpdate';

export type OmitForViewMode<
  M extends EnModes,
  T extends EnTableTypes,
> = M extends EnModes.view
  ? Omit<TCellDataUpdate<M, T, string>, 'updateFunc' | 'id'>
  : TCellDataUpdate<M, T, string>;
