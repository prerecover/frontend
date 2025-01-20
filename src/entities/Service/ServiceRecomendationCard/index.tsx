import BoxWrapper from '@/components/ui/box-wrapper';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IService } from '@/shared/types/service.interface';
import { Characteristics } from '@/entities/Common/characteristics';
import durationParse from '@/shared/utils/durationParse';
import serviceAvatar from '/public/assets/service.svg';
import { Text } from '@/components/ui/text';

export default function ServiceRecomendationCard({ service }: { service: IService }) {
    const router = useRouter();
    const duration = durationParse(service?.durationMin || 100);
    let doctors: string = '';
    service?.doctors?.forEach((doctor) => (doctors += `${doctor?.lastName} ${doctor?.firstName?.charAt(0)}., `));
    return (
        <>
            <BoxWrapper
                color='white'
                className='w-full border-blue-100 not_found:flex-center not_found:h-[90px] not_found:w-[134px]'>
                <div
                    className='flex gap-3 cursor-pointer items-start justify-start not_found:hidden'
                    onClick={() => router.push(`/service/${service?._id}`)}>
                    <Image
                        src={service?.avatar || serviceAvatar}
                        width={60}
                        height={100}
                        className='rounded-[12px] w-[120px] h-[120px]'
                        alt='doctor'
                    />
                    <div className='flex flex-col text-[16px] font-semibold gap-3 truncate'>
                        <h4>{service?.title}</h4>
                        <Characteristics
                            className='gap-2'
                            data={[
                                {
                                    key: 'Клиника:',
                                    value: service?.clinic?.title || '-',
                                    className: 'underline text-blue underline-offset-2',
                                },
                                {
                                    key: 'Длительность:',
                                    value: duration,
                                },
                                {
                                    key: 'Цена:',
                                    value: `${service?.priceMax} сум`,
                                },
                            ]}
                        />
                    </div>
                </div>
                <div className='not_found:flex-center not_found:flex-col not_found:gap-2 hidden'>
                    <Image
                        src={service?.avatar || serviceAvatar}
                        width={40}
                        height={40}
                        className='rounded-full w-[40px] h-[40px]'
                        alt='doctor'
                    />
                    <Text className='font-medium text-[14px] truncate'>{service?.title}</Text>
                </div>
            </BoxWrapper>
        </>
    );
}
