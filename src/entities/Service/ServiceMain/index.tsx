'use client';
import { IService } from '@/shared/types/service.interface';
import ServiceInfo from './service-info';
import { Button } from '@/components/ui/button';
import { FilterBox } from '@/components/ui/filter-box';
import { useEffect, useState } from 'react';
import UnionParams from '@/entities/Common/UnionParams';
import { DoughnutBlock } from './doughnut-block';
import { Text } from '@/components/ui/text';
import 'swiper/css';
import { useCurrServiceStore } from '@/shared/store/currServiceStore';
import { useRouter } from 'next/navigation';
import ClinicDesktop from '@/entities/Common/clinic-desktop';
import Image from 'next/image';
import { formatDate } from '@/shared/utils/formatDate';
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
                <FilterBox data={filters} isSelect={filter} setIsSelect={setFilter} className='mt-4' />
                {filter == 'Общие параметры' ? (
                    <UnionParams
                        title={`Появление услуги: ${formatDate(new Date(service.createdAt))}`}
                        treated={service.treated}
                    />
                ) : (
                    <DoughnutBlock />
                )}
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
                    <div className='flex pl-[30px] pt-[18px] gap-[30px] h-full'>
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
                                <UnionParams
                                    title={`Появление услуги: ${formatDate(new Date(service.createdAt))}`}
                                    treated={service.treated}
                                />
                            ) : (
                                <DoughnutBlock />
                            )}
                        </div>{' '}
                    </div>
                </div>
            </div>
        </>
    );
}
