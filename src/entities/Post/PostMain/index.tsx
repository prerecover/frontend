'use client';
import PostMainCard from '@/entities/Post/PostMainCard';
import { cn } from '@/lib/utils';
import { INews } from '@/shared/types/news.interface';
import 'swiper/css';

export default function PostMain({
    className,
    data,
    search,
    small,
}: {
    className?: string;
    data: INews[];
    search?: string;
    small?: boolean;
}) {
    return (
        <>
            <div className='relative flex flex-col gap-4'>
                <div className={cn('flex justify-center gap-2 w-full', className)}>
                    <div className={cn('flex flex-col gap-2 max-w-[360px] w-full', !small && 'max-w-[660px] w-full')}>
                        {data
                            ?.filter((service) =>
                                Object.values(service).some((value) => {
                                    if (typeof value === 'string') {
                                        return search ? value.toLowerCase().includes(search.toLowerCase()) : value;
                                    }
                                }),
                            )
                            .map((news) => (
                                <PostMainCard
                                    small={small}
                                    key={news._id}
                                    _id={news._id}
                                    text={news.text}
                                    like={news.like}
                                    saved={news.saved}
                                    title={news.title}
                                    clinic={news.clinic}
                                    imgs={news.newsImages}
                                    videos={news.newsVideos}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}
