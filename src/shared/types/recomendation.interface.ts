import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { IDoctor } from './doctor.interface';
import { IService } from './service.interface';

export interface IRecomendation extends ICommon {
  service: IService;
  clinic: IClinic;
  doctor: IDoctor;
}
