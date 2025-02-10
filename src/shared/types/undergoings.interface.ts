import { IAppointment } from './appointment.interface';
import { ICommon } from './common.interface';

export interface IUndergoing extends ICommon {
  rating: number;
  appointment: IAppointment;
}
