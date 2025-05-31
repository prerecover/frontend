import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TClinicsDataStructure } from '../../Clinics/data-structure';
import { TDoctorsDataStructure } from '../../Doctors/data-structure';
import { TServicesDataStructure } from '../../Services/data-structure';

export type TBodyItemId<T extends EnTableTypes> = T extends EnTableTypes.clinics
  ? TClinicsDataStructure['id']
  : T extends EnTableTypes.doctors
    ? TDoctorsDataStructure['id']
    : T extends EnTableTypes.services
      ? TServicesDataStructure['id']
      : never;

export type TBodyItemIdField<T extends EnTableTypes> = {
  id: TBodyItemId<T>;
};
