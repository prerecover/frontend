import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TClinicsBody } from '../../Clinics/Bodies';
import { TDoctorsBody } from '../../Doctors/Bodies';
import { TServicesBody } from '../../Services/Bodies';
import { EnModes } from '../Entities/Modes';

export type TBodyItemId<
  M extends EnModes,
  T extends EnTableTypes,
> = T extends EnTableTypes.clinics
  ? TClinicsBody<M>[0]['id']
  : T extends EnTableTypes.doctors
    ? TDoctorsBody<M>[0]['id']
    : T extends EnTableTypes.services
      ? TServicesBody<M>[0]['id']
      : never;

export type TBodyItemIdField<M extends EnModes, T extends EnTableTypes> = {
  id: TBodyItemId<M, T>;
};
