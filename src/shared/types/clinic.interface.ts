import { IAppointment } from './appointment.interface';
import { ICommon } from './common.interface';
import { ICountry } from './country.interface';
import { IDoctor } from './doctor.interface';
import { INews } from './news.interface';
import { IService } from './service.interface';

export interface IClinic extends ICommon {
    title: string;
    typeTitle?: string;
    avatar?: string;
    address: string;
    age?: number;
    specialization: string;

    description?: string;
    calendar?: string;
    detail: IClinicDetail;
    employees?: number;
    card?: string;
    country: ICountry;
    city: string;
    treated: number;
    appointments?: IAppointment[];
    news?: INews[];
    doctors?: IDoctor[];
    services: IService[];
}

export interface IClinicDetail {
    _id: string;
    adminFirstName?: string;
    adminLastName?: string;
    adminNumber?: string;
    computerHave: boolean;
    elevatorHave: boolean;
    internetHave: boolean;
    square?: number;
    language?: string;
    registryNumber?: string;
    totalDoctors: number;
    totalServices: number;
    numberOfFloors: number;
    mondayTime?: number;
    numbers?: string[];
    tuesdayTime?: number;
    wednesdayTime?: number;
    thursdayTime?: number;
    fridayTime?: number;
    saturdayTime?: number;
    sundayTime?: number;
    site?: string;
    rating: number;
}
