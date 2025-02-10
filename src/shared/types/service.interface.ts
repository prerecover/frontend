import { IAppointment } from './appointment.interface';
import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { IDoctor, IDoctorCreate } from './doctor.interface';
import { INews } from './news.interface';

export enum PAYMENT_METHOD {
  ONLINE = 'Онлайн',
  CASHBOX = 'В кассу',
  TO_DOCTOR = 'Врачу',
  INSTALLMENT = 'В рассрочку',
  CREDIT = 'В кредит',
}

type PM = keyof typeof PAYMENT_METHOD;
export const PAYMENT_METHOD_ARRAY = Object.keys(PAYMENT_METHOD) as Array<PM>;

export interface IService extends ICommon {
  title: string;
  description: string;
  durationMin?: number;
  durationMax?: number;
  online: boolean;
  offline: boolean;
  paymentMethods: string[];
  treated: number;
  priceMin?: number;
  priceMax?: number;
  doctors?: IDoctor[] | Partial<IDoctor>[];
  appointments?: IAppointment[];
  category: IServiceCategory;
  clinic: IClinic;
  news?: INews[];
  avatar?: string;
}
export interface IServiceCreate extends ICommon {
  title: string;
  description: string;
  durationMin?: number;
  durationMax?: number;
  online: boolean;
  offline: boolean;
  paymentMethods: string[];
  treated: number;
  priceMin?: number;
  priceMax?: number;
  doctors?: IDoctorCreate[] | Partial<IDoctorCreate>[];
  category: IServiceCategory | string;
  clinic: IClinic;
  news?: INews[];
  avatar?: File;
}

export interface IServiceCategory {
  _id: string;
  slug: string;
  title: string;
  services?: IService[];
}
