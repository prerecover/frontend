'use client';
import { FilterBtn } from '@/components/ui/filter-btn';
import PostMain from '@/entities/Post/PostMain';
import { cn } from '@/lib/utils';
import { INews } from '@/shared/types/news.interface';

export default function MainPosts({ className, data }: { className?: string; data: INews[] }) {
    return (
        <>
            <FilterBtn className='self-end' onClick={() => console.log(1)} />
            <div className='relative flex flex-col gap-4'>
                <div className={cn('flex justify-center gap-2 w-full', className)}>
                    <div className='flex flex-col gap-2 max-w-[660px] w-full'>
                        {data.map((news) => (
                            <PostMain
                                key={news._id}
                                _id={news._id}
                                text={news.text}
                                like={news.like}
                                saved={news.saved}
                                title={news.title}
                                clinic={news.clinic}
                                imgs={[
                                    'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
                                    'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
                                ]}
                                videos={[]}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
