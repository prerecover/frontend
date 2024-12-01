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
import BoxWrapper from '@/components/ui/box-wrapper';
import { Text } from '@/components/ui/text';
import { Progress } from '@/components/ui/progress';

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
                <div className='flex w-full gap-[14px] mb-[14px] '>
                    <UnionParams title='Опыт в лечении: 3 года' treated={clinic.treated} createdAt={clinic.createdAt} />
                    <div className='flex flex-col w-full gap-1'>
                        <BoxWrapper
                            color='white'
                            className='rounded-[12px] border-[1px] border-blue-200 p-4 mt-2 gap-4 flex flex-col h-[85px]'>
                            <div className='flex-between'>
                                <Text>Рассчитанная польза</Text>
                                <Text>42%</Text>
                            </div>
                            <Progress
                                value={42}
                                className='h-[10px]'
                                color='bg-[#0064FA]'
                                style={{ backgroundColor: '#C8DBF6' }}
                            />
                        </BoxWrapper>
                        <BoxWrapper
                            color='white'
                            className='rounded-[12px] border-[1px] border-blue-200 p-4 mt-2 gap-4 flex flex-col h-[85px]'>
                            <div className='flex-between'>
                                <Text>Полученная польза услуги</Text>
                                <Text>10%</Text>
                            </div>
                            <Progress
                                value={10}
                                className='h-[10px]'
                                color='bg-[#00CC5E]'
                                style={{ backgroundColor: '#E5FFF1' }}
                            />
                        </BoxWrapper>
                    </div>
                </div>
                <BoxWrapper color='white' className='w-full grid grid-cols-2 border-blue-200 gap-8 px-[30px] py-[22px]'>
                    <div className='flex-between'>
                        <Text className='font-medium text-[18px] text-grey-700'>Помощь в лечении</Text>
                        <Text className='font-medium text-[22px]'>64%</Text>
                    </div>
                    <div className='flex-between'>
                        <Text className='font-medium text-[18px] text-grey-700'>Ответственность</Text>
                        <Text className='font-medium text-[22px]'>88%</Text>
                    </div>
                    <div className='flex-between'>
                        <Text className='font-medium text-[18px] text-grey-700'>Точность в рассчетах</Text>
                        <Text className='font-medium text-[22px]'>77%</Text>
                    </div>
                    <div className='flex-between'>
                        <Text className='font-medium text-[18px] text-grey-700'>Точность в лечении</Text>
                        <Text className='font-medium text-[22px]'>90%</Text>
                    </div>
                </BoxWrapper>
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
