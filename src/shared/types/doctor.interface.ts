import { ICommon } from './common.interface';
import { ICountry } from './country.interface';

export interface IDoctor extends ICommon {
    address?: string;
    avatar?: string;

    birthday?: number;
    email?: string;
    login?: string;
    number?: string;
    firstName: string;
    lastName: string;
    specialization: string;
    country?: ICountry;
    surname: string;
    isMain?: boolean;
    sex: boolean;
    isVerified: boolean;
    verificationCode: number;
}
