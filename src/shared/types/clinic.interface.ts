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
    specialization: string;
    startTime: number;
    description?: string;
    calendarLink?: string;
    adminFirstName?: string;
    adminLastName?: string;
    adminNumber?: string;
    endTime: number;
    employees?: number;
    workDays: string;
    site?: string;
    card?: string;
    rating: number;
    country?: ICountry;
    city?: string;
    treated: number;
    appointments?: IAppointment[];
    news?: INews[];
    doctors?: IDoctor[];
    services: IService[];
}
