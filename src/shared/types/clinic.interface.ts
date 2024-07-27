import { ICommon } from './common.interface';
import { ICountry } from './country.interface';

export interface IClinic extends ICommon {
    title: string;
    avatar?: string;
    address: string;
    rating: number;
    country?: ICountry;
    city?: string;
}
