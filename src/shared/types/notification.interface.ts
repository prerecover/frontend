import { ICommon } from './common.interface';
import { IUser } from './user.interface';

export interface INotification extends ICommon {
    text: string;
    user: IUser;
    isRead: boolean;
}
