import { TDoctorsDataStructure } from '../Doctors/data-structure';
import { EnNetType } from '../shared/Entities/NetType';
import { TPrevPage } from '../shared/Utils/PrevPage';
import { EnPayType } from './entities/PayType';

export type TDoctorItem = {
  id: TDoctorsDataStructure['id'];
  name: TDoctorsDataStructure['name'];
  speciality: TDoctorsDataStructure['speciality'];
} & TPrevPage;

export type TServicesDataStructure = {
  id: string;
  name: string;
  category: string;
  consultationType: EnNetType;
  description: string;
  price: string;
  payType: EnPayType[];
  duration: string;
  doctors: TDoctorItem[];
} & TPrevPage;
