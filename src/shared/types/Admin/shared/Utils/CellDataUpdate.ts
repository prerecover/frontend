import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '../Entities/Modes';
import { TBodyItemIdField } from './BodyItemId';
import { TCellIndexField } from './CellIndex';
import { TClinicsDataStructure } from '../../Clinics/data-structure';
import { TDoctorsDataStructure } from '../../Doctors/data-structure';
import { TServicesDataStructure } from '../../Services/data-structure';

export type TCellFuncParams<D, T extends EnTableTypes> = {
  id: T extends EnTableTypes.clinics
    ? TClinicsDataStructure['id']
    : T extends EnTableTypes.doctors
      ? TDoctorsDataStructure['id']
      : T extends EnTableTypes.services
        ? TServicesDataStructure['id']
        : never;
  cellIndex: number;
  data: D;
};

export type TUpdateFuncField<T extends EnTableTypes, D> = {
  updateFunc: (params: TCellFuncParams<D, T>) => void;
};

export type TCellDataUpdate<T extends EnTableTypes, D> = {
  updateFunc: (params: TCellFuncParams<D, T>) => void;
} & TBodyItemIdField<T> &
  TCellIndexField;
