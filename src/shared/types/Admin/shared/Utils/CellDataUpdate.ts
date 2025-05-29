import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '../Entities/Modes';
import { TBodyItemIdField } from './BodyItemId';
import { TCellIndexField } from './CellIndex';

export type TCellDataUpdate<
  M extends EnModes,
  T extends EnTableTypes | never = never,
> = {} & TBodyItemIdField<M, T> & TCellIndexField;
