import { Text } from '@/components/ui/text';
import ServiceOfDoctorCard from '@/entities/Service/ServiceOfDoctorCard';
import { WifiIcon } from '@/icons';
import { IService } from '@/shared/types/service.interface';

export default function DoctorServicesDesktop({ services }: { services?: IService[] }) {
    return (
        <div className='p-[30px] mobile:hidden'>
            <div className='flex'>
                <div className='flex flex-col max-w-[520px] w-full border-r-[1px] border-r-grey border-solid'>
                    <div className='flex-between bg-blue-200 gap-2 h-[64px] rounded-tl-[10px] px-4 '>
                        <div className='flex gap-2'>
                            <WifiIcon />
                            <Text type='p'>Онлайн услуги</Text>
                        </div>
                        <Text type='h1' className='text-[30px] font-medium'>
                            {services?.filter((service) => service.online).length}
                        </Text>
                    </div>
                    <div className='w-full flex flex-col gap-4 bg-grey-100 pt-4 h-screen pb-4'>
                        {services
                            ?.filter((service) => service.online)

                            .map((service, i) => (
                                <ServiceOfDoctorCard
                                    service={service}
                                    key={i}
                                    num={i + 1}
                                    className='max-w-[360px] mx-auto'
                                />
                            ))}
                    </div>
                </div>

                <div className='flex flex-col max-w-[520px] w-full border-l-[1px] border-l-grey border-solid'>
                    <div className='flex-between bg-blue-200 gap-2 h-[64px] rounded-tr-[10px] px-4'>
                        <div className='flex gap-2'>
                            <WifiIcon />
                            <Text type='p'>Онлайн услуги</Text>
                        </div>
                        <Text type='h1' className='text-[30px] font-medium'>
                            {services?.filter((service) => !service.online).length}
                        </Text>
                    </div>

                    <div className='w-full flex flex-col bg-grey-100 gap-4 h-screen'>
                        {services
                            ?.filter((service) => !service.online)
                            .map((service, i) => (
                                <ServiceOfDoctorCard
                                    service={service}
                                    key={i}
                                    num={i + 1}
                                    className='max-w-[360px] mx-auto'
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
