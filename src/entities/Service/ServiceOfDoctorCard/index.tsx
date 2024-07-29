import BoxWrapper from '@/components/ui/box-wrapper';
import { IService } from '@/shared/types/service.interface';
import { useRouter } from 'next/navigation';

export default function ServiceOfDoctorCard({ service, num }: { service?: IService; num: number }) {
    const router = useRouter();
    return (
        <>
            <BoxWrapper color='white' className='border-blue-100'>
                <div
                    className='flex gap-3 truncate cursor-pointer'
                    onClick={() => router.push(`/service/${service?._id}`)}>
                    <div className='text-gray-500 font-semibold text-[14px] text-grey-700 mt-[2px]'>{num}</div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-[19px] '>{service?.title}</h1>
                        <div className='flex '>
                            <h3 className='font-medium text-[#7D7F82] text-[16px]'>Врачи(и):</h3>
                            <h3 className='font-medium text-[#262626] text-[16px] ml-2'>
                                {service?.doctors?.map(
                                    (doctor) =>
                                        `${doctor.firstName} ${doctor.lastName}` +
                                        `${service?.doctors!.length > 1 ? ',' : ''}`,
                                )}
                            </h3>
                        </div>
                        <div className='flex truncate'>
                            <h3 className='font-medium text-[#7D7F82] text-[16px]'>Длительность:</h3>
                            <h3 className='font-medium text-[#262626] text-[16px] ml-2'>{service?.duration} минут</h3>
                        </div>
                        <div className='flex'>
                            <h3 className='font-medium text-[#7D7F82] text-[16px]'>Лечилось:</h3>
                            <h3 className='font-medium text-[#262626] text-[16px] ml-2'>120 ебальничков</h3>
                        </div>
                        <div className='flex'>
                            <h3 className='font-medium text-[#7D7F82] text-[16px]'>Кол-во новостей:</h3>
                            <h3 className='font-medium text-[#262626] text-[16px] ml-2'>12</h3>
                        </div>
                        <div className='h-[1px] w-screen bg-[#C8DBF6] mt-3'></div>
                        <div className='flex mt-3 gap-1 items-center'>
                            <h3 className='font-medium text-[#262626] text-[16px]'>Цена:</h3>
                            <h1 className='font-semibold text-[19px]'>{service?.price} UZS</h1>
                        </div>
                    </div>
                </div>
            </BoxWrapper>
        </>
    );
}
