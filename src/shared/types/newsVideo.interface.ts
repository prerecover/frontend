import { ICommon } from './common.interface';

export interface INewsVideo extends ICommon {
    video: string;
    news?: INews;
}
