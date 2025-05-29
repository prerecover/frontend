import { TDoctorsDataStructure } from '../Doctors/data-structure';
import { EnNetType } from '../shared/Entities/NetType';
import { EnPayType } from './entities/PayType';

export type TDoctorItem = {
  id: TDoctorsDataStructure['id'];
  name: TDoctorsDataStructure['name'];
  speciality: TDoctorsDataStructure['speciality'];
};

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
};
