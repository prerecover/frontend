import { EnCellTypes } from '../shared/Entities/CellTypes';
import { EnMultiselectTypes } from './FloatCellTypes/Multiselect';
import { EnMultiselectSearchTypes } from './FloatCellTypes/MultiselectSearch';

export type TDoctorsAllCellTypes =
  | EnCellTypes.inline
  | EnCellTypes.action
  | EnCellTypes.net
  | EnCellTypes.inlineArea
  | EnMultiselectTypes.workDays
  | EnMultiselectSearchTypes.services;
