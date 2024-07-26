import { ICommon } from './common.interface';
import { INews } from './news.interface';
import { IUser } from './user.interface';

export interface ILike extends ICommon {
    news: INews;
    author: IUser;
}
