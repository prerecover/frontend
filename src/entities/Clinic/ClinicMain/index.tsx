'use client';
import { IClinic } from '@/shared/types/clinic.interface';
import Image from 'next/image';
import ClinicInfo from './clinic-info';
import { cn } from '@/lib/utils';
import styles from './styles.module.scss';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LinksBlock from './links-block';
import UnionParams from '@/entities/Common/UnionParams/index';
import { DoughnutBlock } from './doughnut-block';
import ClinicDesktop from '@/entities/Common/clinic-desktop';
import ServicesDesktop from '@/entities/Common/services-desktop';
import DoctorsListDesktop from '@/entities/Common/doctors-list-desktop';
import NewsListDesktop from '@/entities/Common/news-desktop';

export default function ClinicMain({ clinic }: { clinic: IClinic }) {
    const onlineServices = clinic.services?.filter((service) => service.online).length;
    const offlineServices = clinic.services?.filter((service) => service.offline).length;
    const news = clinic.news?.length;
    const doctors = clinic.doctors?.length;
    return (
        <>
            <div className='desktop:hidden p-4 '>
                <div className={cn('max-w-none w-full mt-[-16px] mx-[-16px] relative', styles.clinic_image)}>
                    <Image
                        src={clinic.avatar || '/assets/clinic.jpg'}
                        width={200}
                        className={cn(
                            'h-full w-full max-h-[140px] object-cover transition-all duration-200 ease-in closed_sidebar:max-h-[300px]',
                        )}
                        alt='clinic'
                        height={200}
                    />
                    <Link
                        className='absolute left-0 right-0 bottom-0 text-[12px] font-medium text-white py-[6px] px-4 bg-blue flex-between'
                        href='/'>
                        <p>Имеется запись на 24.01.24 / 09:00</p>

                        <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                            <path
                                d='M7.5 15L12.5 10L7.5 5'
                                stroke='white'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                            />
                        </svg>
                    </Link>
                </div>
                <ClinicInfo clinic={clinic} />
                <div className='flex items-center gap-2 mt-4 py-[16px] px-0'>
                    <Button variant={'default'} className='px-10 h-[46px] w-full'>
                        Записаться
                    </Button>
                    <Button variant={'outline'} className='px-10 h-[46px] w-full text-blue border-blue'>
                        Написать
                    </Button>
                </div>
                <LinksBlock
                    onlineServices={onlineServices}
                    offlineServices={offlineServices}
                    news={news}
                    doctors={doctors}
                />
                <h1 className='mt-[24px] font-semibold text-[17px] leading-[20px]'>Общие показатели клиники</h1>
                <UnionParams title='Опыт в лечении: 3 года' />
                <h1 className='mt-6 font-medium text-[16px] leading-[20px]'>Польза услуг</h1>
                <DoughnutBlock />
            </div>
            <div className='flex mobile:hidden '>
                <ClinicDesktop clinic={clinic} />
                <div className='flex pl-[30px] gap-[30px] overflow-x-scroll py-[18px]'>
                    <ServicesDesktop online services={clinic.services} withFilter />
                    <ServicesDesktop online={false} services={clinic.services} withFilter />
                    <DoctorsListDesktop doctors={clinic.doctors} withFilter />
                </div>
            </div>
        </>
    );
}
