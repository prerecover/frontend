'use client';
import PostMain from '@/entities/Post/PostMain';
import { INews } from '@/shared/types/news.interface';

import 'swiper/css';

export default function ClinicNews({ news }: { news: INews[] }) {
    return (
        <>
            <div className='flex flex-col p-4 gap-1'>
                {news.map((news) => (
                    <>
                        <PostMain
                            key={news._id}
                            _id={news._id}
                            imgs={[
                                'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
                                'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
                            ]}
                            videos={[]}
                            text={news.text}
                            title={news.title}
                            like={news.like}
                            saved={news.saved}
                        />
                    </>
                ))}
            </div>
        </>
    );
}
