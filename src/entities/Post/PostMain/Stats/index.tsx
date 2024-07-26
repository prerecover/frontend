'use client';
import { TelegramIcon } from '@/icons';
import SavedBtn from './saved';
import LikeBtn from './likes';
import { ILike } from '@/shared/types/like.interface';
import { ISaved } from '@/shared/types/saved.interface';

export default function PostMainStats({ like, saved, newsId }: { like?: ILike; saved?: ISaved; newsId: string }) {
    return (
        <>
            <div className='flex items-center gap-[6px]'>
                <SavedBtn saved={saved} newsId={newsId} />
                <div className='w-[38px] h-[38px] flex-center rounded-[12px] bg-grey-200 cursor-pointer slider:w-[40px] slider:h-[40px]'>
                    <TelegramIcon />
                </div>
                <LikeBtn like={like} newsId={newsId} />
            </div>
        </>
    );
}
