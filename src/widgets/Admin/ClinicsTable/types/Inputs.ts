import { TClinicsDataStructure } from '@/shared/types/Admin/Clinics/data-structure';

export interface TInputs
  extends Pick<
    TClinicsDataStructure,
    | 'name'
    | 'type'
    | 'clinicWorkBegin'
    | 'square'
    | 'phone'
    | 'reportPhone'
    | 'country'
    | 'city'
    | 'address'
    | 'floorCount'
    | 'hasComputer'
    | 'hasElevator'
    | 'hasInternet'
    | 'workTime'
  > {
  languages: string[];
}
