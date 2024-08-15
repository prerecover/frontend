'use client';
import { IService } from '@/shared/types/service.interface';
import ServiceInfo from './service-info';
import { Button } from '@/components/ui/button';
import { FilterBox } from '@/components/ui/filter-box';
import { useEffect, useState } from 'react';
import UnionParams from '@/entities/Common/UnionParams';
import { DoughnutBlock } from './doughnut-block';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

import 'swiper/css';
import PostMainCard from '@/entities/Post/PostMainCard';
import { useCurrServiceStore } from '@/shared/store/currServiceStore';
import { useRouter } from 'next/navigation';
import ClinicDesktop from '@/entities/Common/clinic-desktop';
import NewsListDesktop from '@/entities/Common/news-desktop';
import Image from 'next/image';
export default function ServiceMain({ service }: { service: IService }) {
    const filters = ['Общие параметры', 'Польза услуги'];
    const [filter, setFilter] = useState('Общие параметры');
    const { setService } = useCurrServiceStore();
    const router = useRouter();
    useEffect(() => {
        setService(service);
    }, [service, setService]);
    return (
        <>
            <div className='bg-white p-4 desktop:hidden'>
                <ServiceInfo service={service} />
                <Button className='w-full' variant={'default'} onClick={() => router.push('/add-appointment')}>
                    Записаться
                </Button>
                <FilterBox
                    data={filters}
                    isSelect={filter}
                    setIsSelect={setFilter}
                    className='border-[1px] border-blue-200 mt-4 max-h-[45px]'
                />
                {filter == 'Общие параметры' ? <UnionParams title='Появление услуги: 3 года' /> : <DoughnutBlock />}
            </div>{' '}
            <div className='flex mobile:hidden transition-all '>
                <ClinicDesktop clinic={service.clinic} />
                <div className='flex flex-col'>
                    <div className='bg-blue-200 h-[60px] w-dvw flex-between pl-[30px]'>
                        <div className='flex-center gap-[18px] cursor-pointer' onClick={() => router.back()}>
                            <Image
                                src={'/assets/arrow-left.svg'}
                                width={28}
                                height={28}
                                className='w-[28px] h-[28px]'
                                alt='back'
                            />
                            <Text type='p' className='text-[16px] font-medium'>
                                Назад
                            </Text>
                        </div>
                    </div>
                    <div className='flex pl-[30px] pt-[18px] gap-[30px]'>
                        <div className='bg-white p-4 rounded-[12px] min-w-[530px]'>
                            <ServiceInfo service={service} />
                            <Button
                                className='w-full'
                                variant={'default'}
                                onClick={() => router.push('/add-appointment')}>
                                Записаться
                            </Button>
                            <FilterBox
                                data={filters}
                                isSelect={filter}
                                setIsSelect={setFilter}
                                className='border-[1px] border-blue-200 mt-4'
                            />
                            {filter == 'Общие параметры' ? (
                                <UnionParams title='Появление услуги: 3 года' />
                            ) : (
                                <DoughnutBlock />
                            )}
                        </div>{' '}
                        <NewsListDesktop
                            rounded_content
                            news={service.news}
                            withTitle={false}
                            bgWhite
                            withFilter
                            className='rounded-[10px]'
                        />
                    </div>
                </div>
            </div>
            <div className='mt-[25px] p-4 pc:hidden'>
                <Text className='font-semibold text-[16px]' type='h1'>
                    Новости
                </Text>
                <div className='flex flex-col gap-4'>
                    <div className={cn('flex justify-center gap-2 w-full')}>
                        <div className='flex flex-col gap-2 max-w-[660px] w-full '>
                            {service.news?.map((news) => (
                                <PostMainCard
                                    key={news._id}
                                    _id={news._id}
                                    text={news.text}
                                    like={news.like}
                                    saved={news.saved}
                                    title={news.title}
                                    imgs={news.newsImages}
                                    videos={news.newsVideos}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
