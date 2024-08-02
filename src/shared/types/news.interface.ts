import { IClinic } from './clinic.interface';
import { ICommon } from './common.interface';
import { ILike } from './like.interface';
import { INewsImage } from './newsImage.interface';
import { INewsVideo } from './newsVideo.interface';
import { ISaved } from './saved.interface';

export interface INews extends ICommon {
    title: string;
    text: string;
    like?: ILike;
    saved?: ISaved;
    clinic?: IClinic;
    newsImages: INewsImage[];
    newsVideos: INewsVideo[];
}
