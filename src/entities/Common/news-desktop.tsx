'use client';
import { FilterBtn } from '@/components/ui/filter-btn';
import { SearchInput } from '@/components/ui/search-input';
import { Text } from '@/components/ui/text';
import { DoctorsIcon } from '@/icons/DoctorsIcon';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import PostMain from '../Post/PostMain';
import { INews } from '@/shared/types/news.interface';

export default function NewsListDesktop({
    news = [],
    className,
    border_r = false,
    rounded_l = true,
    rounded_r = true,
    withFilter = false,
}: {
    news?: INews[];
    className?: string;
    border_r?: boolean;
    rounded_l?: boolean;
    rounded_r?: boolean;
    withFilter?: boolean;
}) {
    const [search, setSearch] = useState<string>('');
    return (
        <div className={'mobile:hidden'}>
            <div
                className={cn(
                    'flex flex-col h-screen',
                    withFilter ? 'w-[442px] px-[18px]' : 'min-w-[520px] w-full',
                    border_r && 'border-r-[1px] border-r-grey border-solid',
                )}>
                <div
                    className={cn(
                        'flex-between bg-blue-100 gap-2 min-h-[64px] rounded-tl-[10px] px-4 ',
                        className,
                        rounded_l && 'rounded-tl-[10px]',
                        rounded_r && 'rounded-tr-[10px]',
                    )}>
                    <div className='flex gap-2 items-center'>
                        <DoctorsIcon />
                        <Text type='p'> Новости</Text>
                    </div>
                    <Text type='h1' className='text-[30px] font-medium'>
                        {news?.length}
                    </Text>
                </div>
                <div className='w-full flex flex-col gap-4 bg-grey-100 pt-4 h-screen pb-4 px-[18px]'>
                    {withFilter && news.length > 0 && (
                        <div className='flex gap-3 items-center'>
                            <SearchInput onChange={(e) => setSearch(e.currentTarget.value)} value={search} />
                            <FilterBtn onClick={() => console.log('click')} />
                        </div>
                    )}
                    <div className='flex flex-col p-4 gap-1'>
                        <>
                            <PostMain data={news} search={search} small />
                        </>
                    </div>
                </div>
            </div>
        </div>
    );
}
