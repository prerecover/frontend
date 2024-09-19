import { IAppointment } from './appointment.interface';
import { ICommon } from './common.interface';

export interface IAvailableDate extends ICommon {
    appointment?: IAppointment;
    date: number;
}
