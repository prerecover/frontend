import {
  TDoctorsDataStructure,
  TServiceItem,
} from '@/shared/types/Admin/Doctors/data-structure';

export interface TInputs
  extends Pick<
    TDoctorsDataStructure,
    | 'name'
    | 'speciality'
    | 'consultationType'
    | 'experience'
    | 'workDays'
    | 'workTime'
  > {
  services: TServiceItem['id'][];
}
