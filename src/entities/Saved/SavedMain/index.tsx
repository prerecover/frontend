'use client';
import { ISaved } from '@/shared/types/saved.interface';
import { cn } from '@/lib/utils';
import 'swiper/css';
import PostMainCard from '@/entities/Post/PostMainCard';

export default function SavedMain({ saved }: { saved: ISaved[] }) {
    return (
        <div className='flex flex-col gap-4'>
            <div className={cn('flex justify-center gap-2 w-full')}>
                <div className='flex flex-col gap-2 max-w-[660px] w-full '>
                    {saved.map((saved) => (
                        <PostMainCard
                            key={saved.news._id}
                            _id={saved.news._id}
                            text={saved.news.text}
                            like={saved.news.like}
                            saved={saved.news.saved}
                            title={saved.news.title}
                            imgs={saved.news.newsImages}
                            videos={saved.news.newsVideos}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
