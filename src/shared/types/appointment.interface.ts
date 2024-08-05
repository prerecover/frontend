import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { IDoctor } from './doctor.interface';
import { IService } from './service.interface';
import { IUser } from './user.interface';

export interface IAppointment extends ICommon {
    file?: string;
    notify?: number;
    online: boolean;
    specialCheck: boolean;
    status: string;
    timeEnd: number;
    timeStart: number;
    title: string;
    user: IUser;
    clinic: IClinic;
    doctor: IDoctor;
    duration: number;

    service?: IService;
}
