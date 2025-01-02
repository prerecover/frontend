import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { IDoctor } from './doctor.interface';
import { IService } from './service.interface';
import { IUser } from './user.interface';

export interface ISaved extends ICommon {
    clinic?: IClinic;
    doctor?: IDoctor;
    service?: IService;
    user: IUser;
}
