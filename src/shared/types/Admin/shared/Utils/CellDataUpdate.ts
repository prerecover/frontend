import { EnTableTypes } from '@/segments/Admin/MainTable';
import { EnModes } from '../Entities/Modes';
import { TBodyItemIdField } from './BodyItemId';
import { TCellIndexField } from './CellIndex';
import { TClinicsDataStructure } from '../../Clinics/data-structure';
import { TDoctorsDataStructure } from '../../Doctors/data-structure';
import { TServicesDataStructure } from '../../services/data-structure';

export type TUpdateFuncParams<D, T extends EnTableTypes | never = never> = {
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
  updateFunc: (params: TUpdateFuncParams<D, T>) => void;
};

export type TCellDataUpdate<M extends EnModes, T extends EnTableTypes, D> = {
  updateFunc: (params: TUpdateFuncParams<D, T>) => void;
} & TBodyItemIdField<M, T> &
  TCellIndexField;
