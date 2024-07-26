import { ICommon } from './common.interface';
import { INews } from './news.interface';
import { IUser } from './user.interface';

export interface ISaved extends ICommon {
    news: INews;
    author: IUser;
}
