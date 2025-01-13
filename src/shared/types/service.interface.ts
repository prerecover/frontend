import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { IDoctor } from './doctor.interface';
import { INews } from './news.interface';

export enum PAYMENT_METHOD {
    ONLINE = 'Онлайн',
    CASHBOX = 'В кассу',
    TO_DOCTOR = 'Врачу',
    INSTALLMENT = 'В рассрочку',
    CREDIT = 'В кредит',
}

export interface IService extends ICommon {
    title: string;
    description: string;
    durationMin?: number;
    durationMax?: number;
    online: boolean;
    offline: boolean;
    paymentMethods: PAYMENT_METHOD[];
    treated: number;
    priceMin?: number;
    priceMax?: number;
    doctors?: IDoctor[] | Partial<IDoctor>[];
    category: IServiceCategory | string;
    clinic: IClinic;
    news?: INews[];
    img?: string;
}

export interface IServiceCategory {
    _id: string;
    slug: string;
    title: string;
    services?: IService[];
}
