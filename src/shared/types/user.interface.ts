import { ICommon } from './common.interface';
import { ICountry } from './country.interface';

export interface IUser extends ICommon {
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
    online: boolean;
    sex: boolean;
    isVerified: boolean;
    verificationCode: number;
}
