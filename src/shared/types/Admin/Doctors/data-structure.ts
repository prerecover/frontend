import { EnNetType } from '../shared/Entities/NetType';
import { EnWorkDays } from './Entities/WorkDays';
import { TServicesDataStructure } from '../Services/data-structure';
import { TPrevPage } from '../shared/Utils/PrevPage';

export type TServiceItem = {
  id: TServicesDataStructure['id'];
  name: TServicesDataStructure['name'];
  category: TServicesDataStructure['category'];
};

export type TDoctorsDataStructure = {
  id: string;
  name: string;
  speciality: string;
  consultationType: EnNetType;
  experience: string;
  workDays: EnWorkDays[];
  workTime: string;
  services: { data: TServiceItem[] } & TPrevPage;
};
