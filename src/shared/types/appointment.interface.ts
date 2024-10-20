import { IAvailableDate } from './availableDate.interface';
import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { IDoctor } from './doctor.interface';
import { IService } from './service.interface';
import { ISurvey } from './survey.interface';
import { IUser } from './user.interface';

export interface IAppointment extends ICommon {
    file?: string;
    notify?: number;
    online: boolean;
    specialCheck: boolean;
    status: 'In process' | 'Rejected' | 'Approoved' | 'Pending';
    timeEnd: number;
    timeStart: number;
    title: string;
    user: IUser;
    clinic: IClinic;
    doctor: IDoctor;
    duration: number;
    survey: ISurvey;
    availableDates: IAvailableDate[];

    service: IService;
}
