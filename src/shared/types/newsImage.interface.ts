import { ICommon } from './common.interface';
import { INews } from './news.interface';

export interface INewsImage extends ICommon {
    image: string;
    news?: INews;
}
