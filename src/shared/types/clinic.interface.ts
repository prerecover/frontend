import { IAppointment } from './appointment.interface';
import { ICommon } from './common.interface';
import { ICountry } from './country.interface';
import { IDoctor } from './doctor.interface';
import { INews } from './news.interface';
import { IService } from './service.interface';

export interface IClinic extends ICommon {
    title: string;
    avatar?: string;
    address: string;
    rating: number;
    country?: ICountry;
    city?: string;
    appointments?: IAppointment[];
    news?: INews[];
    doctors?: IDoctor[];
    services: IService[];
}
