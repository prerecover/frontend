import { EnAccumulator } from '@/shared/types/Admin/Clinics/FloatCellTypes/Accumulator';
import { EnLinks } from '@/shared/types/Admin/Clinics/FloatCellTypes/Links';
import { EnMultiselectTypes } from '@/shared/types/Admin/Clinics/FloatCellTypes/Multiselect';
import { EnCellTypes } from '@/shared/types/Admin/shared/Entities/CellTypes';
import { EnModes } from '@/shared/types/Admin/shared/Entities/Modes';

interface Params {
  mode: EnModes.view;
  cellType:
    | EnCellTypes.inline
    | EnCellTypes.action
    | EnCellTypes.has
    | EnCellTypes.inlineArea
    | EnMultiselectTypes.language
    | EnAccumulator.clinicsNet
    | EnLinks.doctors
    | EnLinks.services;
}

export const returnViewComponent = ({ cellType, mode }: Params) => {
  switch (cellType) {
    case EnCellTypes.inline:
      return 1;
    case EnCellTypes.action:
      return 1;
    case EnCellTypes.has:
      return 1;
    case EnCellTypes.inlineArea:
      return 1;
    case EnMultiselectTypes.language:
      return 1;
    case EnAccumulator.clinicsNet:
      return 1;
    case EnLinks.doctors:
      return 1;
    case EnLinks.services:
      return 1;
    default:
      throw new Error(`Некорректный cellType для ClinicsTable. Был получен ${cellType}. Поле cellType может быть только следующими данными: cellType:
		| EnCellTypes.inline
		| EnCellTypes.action
		| EnCellTypes.has
		| EnCellTypes.inlineArea
		| EnMultiselectTypes.language
		| EnAccumulator.clinicsNet`);
  }
};
