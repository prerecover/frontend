import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { ICountry } from './country.interface';
import { IService } from './service.interface';

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
