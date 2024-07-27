import { ICommon } from './common.interface';
import { IDoctor } from './doctor.interface';

export interface IService extends ICommon {
    title: string;
    description: string;
    duration: number;
    online: boolean;
    price: number;
    doctors: IDoctor[];
}
