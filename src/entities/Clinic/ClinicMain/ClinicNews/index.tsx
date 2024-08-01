'use client';
import PostMain from '@/entities/Post/PostMain';
import { INews } from '@/shared/types/news.interface';

import 'swiper/css';

export default function ClinicNews({ news }: { news: INews[] }) {
    return (
        <>
            <div className='flex flex-col p-4 gap-1'>
                <>
                    <PostMain data={news} />
                </>
            </div>
        </>
    );
}
