import { IAppointment } from './appointment.interface';
import { ICommon } from './common.interface';
import { ICountry } from './country.interface';
import { ISaved } from './saved.interface';

export interface IUser extends ICommon {
  userId: string;
  address?: string;
  avatar?: string;
  birthday?: number;
  email?: string;
  login?: string;
  number?: string;
  firstName?: string;
  lastName?: string;
  country?: ICountry;
  city?: string;
  surname?: string;
  isStaff: boolean;
  historyStudied: boolean;
  online: boolean;
  sex: boolean;
  isVerified: boolean;
  appointments: IAppointment[];
  saved?: ISaved[];
  verificationCode?: number;
  detail?: IUserDetail;
}

export interface IUserDetail {
  _id: string;
  height?: number;
  weight?: number;
  pressureStart?: number;
  pressureEnd?: number;
  oxygen?: number;
  pulse?: number;
  allergy?: string;
  sleepTime?: number;
  temperature?: number;
  user?: IUser;
}

export interface IAuthByTelegram {
  auth_date: number;
  first_name: string;
  hash: string;
  id: string;
  username: string;
  photo_url?: string;
}
export interface IAuthByOther {
  id: string;
  email?: string;
  name: string;
  image?: string;
}

export interface IAuthByGoogle {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  picture?: string;
}

export interface IAuthByVk {
  id: string;
  email?: string;
  first_name: string;
  photo: string;
  last_name: string;
  can_access_closed: boolean;
  is_closed: boolean;
}
