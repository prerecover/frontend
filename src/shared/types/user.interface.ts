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
}
