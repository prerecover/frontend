import { Text } from '@/components/ui/text';
import { IService } from '@/shared/types/service.interface';
import durationParse from '@/shared/utils/durationParse';
import Link from 'next/link';

export default function ServiceInfo({ service }: { service?: IService }) {
    return (
        <>
            <div className='flex-col flex gap-3'>
                <div className='flex flex-col 14px gap-1 font-normal'>
                    <Text type='h5' className='text-grey-700 text-[12px]'>
                        Название:
                    </Text>
                    <Text type='h5' className='text-[17px] font-semibold'>
                        {service?.title}
                    </Text>
                </div>
                <div className='flex flex-col text-[14px] gap-1 font-normal'>
                    <Text type='h5' className='text-grey-700 text-[12px]'>
                        Врачи:
                    </Text>
                    <div className='flex gap-1'>
                        {service?.doctors?.map((doctor) => (
                            <Link
                                key={doctor._id}
                                href={`/doctor/${doctor._id}`}
                                type='h5'
                                className='font-semibold text-[14px] text-blue'>
                                {`${doctor.lastName} ${doctor.firstName?.charAt(0) + '.'}`}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col 14px gap-1 font-normal'>
                    <Text type='h5' className='text-grey-700 text-[12px]'>
                        Клиника:
                    </Text>
                    <Link className='text-[14px] font-semibold text-blue' href={`/clinic/${service?.clinic._id}`}>
                        {service?.clinic.title}
                    </Link>
                </div>
                <div className='flex flex-col 14px gap-1 font-normal'>
                    <Text type='h5' className='text-grey-700 text-[12px]'>
                        Описание:
                    </Text>
                    <Text type='h5' className='text-[14px] font-medium'>
                        {service?.description}
                    </Text>
                </div>
                <div className='flex justify-between'>
                    <div className='flex-col flex'>
                        <Text type='h5' className='text-grey-700 text-[12px]'>
                            Длительность:
                        </Text>
                        <Text type='h5' className='text-[14px] font-medium'>
                            {durationParse(service?.duration || 100)}
                        </Text>
                    </div>
                    <div className='flex-col flex'>
                        <Text type='h5' className='text-grey-700 text-[12px]'>
                            Цена:
                        </Text>
                        <Text className='font-semibold text-[19px] mb-2' type='h1'>
                            {service?.price} UZS
                        </Text>
                    </div>
                </div>
            </div>
        </>
    );
}
