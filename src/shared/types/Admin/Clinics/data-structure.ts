import { TPrevPage } from '../shared/Utils/PrevPage';
import { EnLanguages } from './entities/Languages';

export type TClinicsNetItem = Pick<
  TClinicsDataStructure,
  'id' | 'address' | 'name'
> &
  TPrevPage;

export type TClinicsDataStructure = {
  id: string;
  name: string;
  type: string;
  clinicWorkBegin: string;
  square: number;
  phone: string;
  reportPhone: string;
  country: string;
  city: string;
  address: string;
  floorCount: number;
  hasComputer: boolean;
  hasInternet: boolean;
  workTime: string;
  categories: {
    qnt: number;
  };
  languages: EnLanguages[];
  mediafiles: unknown;
  hasElevator: boolean;
  clinicsNet: TClinicsNetItem[];
  servicesQnt: number;
  doctorsQnt: number;
} & TPrevPage;
