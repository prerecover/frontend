import { EnCellTypes } from '../shared/Entities/CellTypes';
import { EnAccumulator } from './FloatCellTypes/Accumulator';
import { EnLinks } from './FloatCellTypes/Links';
import { EnMultiselectTypes } from './FloatCellTypes/Multiselect';

export type TClinicsAllCellTypes =
  | EnCellTypes.inline
  | EnCellTypes.action
  | EnCellTypes.has
  | EnCellTypes.inlineArea
  | EnMultiselectTypes.language
  | EnAccumulator.clinicsNet
  | EnLinks.doctors
  | EnLinks.services;
