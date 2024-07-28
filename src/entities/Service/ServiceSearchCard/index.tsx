import BoxWrapper from '@/components/ui/box-wrapper';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IService } from '@/shared/types/service.interface';
import { Characteristics } from '@/entities/Common/characteristics';
import durationParse from '@/shared/utils/durationParse';

export default function ServiceSearchCard({ service }: { service: IService }) {
    const router = useRouter();
    const duration = durationParse(service.duration);
    let doctors: string = '';
    service?.doctors?.forEach((doctor) => (doctors += `${doctor.lastName} ${doctor.firstName.charAt(0)}., `));
    return (
        <>
            <BoxWrapper color='white' className='w-full border-blue-100'>
                <div
                    className='flex gap-3 cursor-pointer items-start justify-start'
                    onClick={() => router.push(`/service/${service._id}`)}>
                    <Image
                        src={service?.img || '/assets/service.svg'}
                        width={60}
                        height={100}
                        className='rounded-[12px] w-[120px] h-[120px]'
                        alt='doctor'
                    />
                    <div className='flex flex-col text-[16px] font-semibold gap-3 truncate'>
                        <h4>{service.title}</h4>
                        <Characteristics
                            data={[
                                {
                                    key: 'Врачи:',
                                    value: doctors || '-',
                                },
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
                                    value: `${service.price} сум`,
                                },
                            ]}
                        />
                    </div>
                </div>
            </BoxWrapper>
        </>
    );
}
