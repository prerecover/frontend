import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { IDoctor } from './doctor.interface';
import { INews } from './news.interface';

export interface IService extends ICommon {
    title: string;
    description: string;
    duration: number;
    online: boolean;
    offline: boolean;
    treated: number;
    price: number;
    doctors?: IDoctor[] | Partial<IDoctor>[];
    clinic: IClinic;
    news?: INews[];
    img?: string;
}
