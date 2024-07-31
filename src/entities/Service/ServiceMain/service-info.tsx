import { Text } from '@/components/ui/text';
import { IService } from '@/shared/types/service.interface';
import durationParse from '@/shared/utils/durationParse';

export default function ServiceInfo({ service }: { service: IService }) {
    return (
        <>
            <div className='flex-col flex gap-3'>
                <div className='flex flex-col 14px gap-1 font-normal'>
                    <Text type='h5' className='text-grey-700 text-[12px]'>
                        Клиника:
                    </Text>
                    <Text type='h5' className='text-[17px] underline underline-offset-4 font-semibold'>
                        {service.clinic?.title}
                    </Text>
                </div>
                <div className='flex flex-col text-[14px] gap-1 font-normal'>
                    <Text type='h5' className='text-grey-700 text-[12px]'>
                        Врачи:
                    </Text>
                    <div className='flex gap-1'>
                        {service?.doctors?.map((doctor) => (
                            <Text
                                key={doctor._id}
                                type='h5'
                                className='underline underline-offset-4 font-semibold text-[14px]'>
                                {`${doctor.lastName} ${doctor.firstName?.charAt(0) + '.'}`}
                            </Text>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col 14px gap-1 font-normal'>
                    <Text type='h5' className='text-grey-700 text-[12px]'>
                        Название:
                    </Text>
                    <Text type='h5' className='text-[14px] underline underline-offset-4 font-semibold'>
                        {service.title}
                    </Text>
                </div>
                <div className='flex flex-col 14px gap-1 font-normal'>
                    <Text type='h5' className='text-grey-700 text-[12px]'>
                        Описание:
                    </Text>
                    <Text type='h5' className='text-[14px] font-medium'>
                        {service.description}
                    </Text>
                </div>
                <div className='flex justify-between'>
                    <div className='flex-col flex'>
                        <Text type='h5' className='text-grey-700 text-[12px]'>
                            Длительность:
                        </Text>
                        <Text type='h5' className='text-[14px] font-medium'>
                            {durationParse(service.duration)}
                        </Text>
                    </div>
                    <div className='flex-col flex'>
                        <Text type='h5' className='text-grey-700 text-[12px]'>
                            Описание:
                        </Text>
                        <Text className='font-semibold text-[19px] mb-2' type='h1'>
                            {service.price} UZS
                        </Text>
                    </div>
                </div>
            </div>
        </>
    );
}
