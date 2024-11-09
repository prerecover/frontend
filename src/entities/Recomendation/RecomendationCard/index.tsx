import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import DoctorRecomendationCard from '@/entities/Doctor/DoctorRecomendationCard';
import ServiceRecomendationCard from '@/entities/Service/ServiceRecomendationCard';
import { IClinic } from '@/shared/types/clinic.interface';
import { IDoctor } from '@/shared/types/doctor.interface';
import { IService } from '@/shared/types/service.interface';
import Image from 'next/image';
import StatisticBlock from './statistic';

export default function RecomendationCard({
    service,
    doctor,
}: {
    service: IService;
    doctor: IDoctor;
    clinic: IClinic;
}) {
    function getRandomArbitrary(min: number, max: number) {
        return Math.ceil(Math.random() * (max - min) + min);
    }
    return (
        <div className='bg-white rounded-[12px] desktop:w-[800px] mx-auto'>
            <div className='flex w-full not_found:flex-col-reverse '>
                <div className='border-solid border-blue-100 border-[1px] not_found:border-[0px] rounded-[12px] m-[18px] w-full desktop:w-[400px]'>
                    <Text className='mt-[24px] font-medium text-[16px]' position='center'>
                        Пациент No {getRandomArbitrary(10000000, 1)}
                    </Text>
                    <div className='flex not_found:flex-row flex-col items-center'>
                        <Image
                            src={'/assets/empty-skelet.svg'}
                            width={173}
                            height={478}
                            alt='user'
                            className='mt-[14px] not_found:w-[80px] reverse_slider:w-[131px] reverse_slider:h-[367px] mx-auto'
                        />
                        <div className='flex flex-col gap-[10px] my-4 px-6 '>
                            <div className='pl-[18px] relative text-[14px] font-medium flex items-center gap-3'>
                                <div className='rounded-full w-[10px] h-[10px] bg-blue-200 '></div>
                                <p>Схожесть параметров</p>
                            </div>
                            <div className='pl-[18px] relative text-[14px] font-medium flex items-center gap-3'>
                                <div className='rounded-full w-[10px] h-[10px] bg-[#FFE1E1]'></div>
                                <p>Схожесть симптомов</p>
                            </div>
                        </div>
                    </div>
                    <StatisticBlock className='reverse_not_found:hidden' />
                </div>
                <div className='flex flex-col not_found:flex-row my-[18px] mr-[18px] gap-[10px] w-full not_found:m-[18px]'>
                    <Text className='text-[14px] font-medium not_found:hidden'>Услуга</Text>
                    <ServiceRecomendationCard service={service} />
                    <Text className='mt-1 text-[14px] font-medium not_found:hidden'>Врач</Text>
                    <DoctorRecomendationCard doctor={doctor} />
                    <StatisticBlock className='not_found:hidden' />
                </div>
            </div>
            <div className='flex w-full justify-around gap-3 px-3'>
                <Button className='w-1/3'>Записаться</Button>
                <Button className='w-1/3' variant={'outline'}>
                    Прогноз
                </Button>
                <Button className='w-1/3' variant={'outline'}>
                    Сохранить
                </Button>
            </div>
        </div>
    );
}
