import { IAppointment } from './appointment.interface';
import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { ICountry } from './country.interface';
import { IService } from './service.interface';

export interface IDoctorSpecialization {
  _id: string;
  title: string;
  slug: string;
  doctors: IDoctor[];
}

export interface IDoctor extends ICommon {
  address?: string;
  avatar?: string;
  birthday?: number;
  email?: string;
  login?: string;
  number?: string;
  firstName: string;
  lastName: string;
  specialization: IDoctorSpecialization;
  country?: ICountry;
  appointments?: IAppointment[];
  services?: IService[];
  clinic: IClinic;
  city?: string;
  surname: string;
  isMain?: boolean;
  sex: boolean;
  isVerified: boolean;
  verificationCod?: number;
  workExp?: number;
}
export interface IDoctorCreate extends ICommon {
  address?: string;
  avatar?: File;
  birthday?: number;
  email?: string;
  login?: string;
  number?: string;
  firstName: string;
  lastName: string;
  specialization: string;
  country?: ICountry;
  services?: IService[];
  clinic: IClinic;
  city?: string;
  surname: string;
  isMain?: boolean;
  sex: boolean;
  isVerified: boolean;
  verificationCod?: number;
  workExp?: number;
}
