import { ICommon } from './common.interface';
import { INews } from './news.interface';

export interface INewsVideo extends ICommon {
    video: string;
    news?: INews;
}
