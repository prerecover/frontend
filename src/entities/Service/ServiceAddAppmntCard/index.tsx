import BoxWrapper from '@/components/ui/box-wrapper';
import { Characteristics } from '@/entities/Common/characteristics';
import { IService } from '@/shared/types/service.interface';
import { useRouter } from 'next/navigation';

export default function ServiceAddAppmntCard({ service }: { service?: IService }) {
    const router = useRouter();
    return (
        <>
            <BoxWrapper
                color='white'
                className='w-full border-blue-100 flex flex-col'
                onClick={() => router.push(`/service/${service?._id}`)}>
                <div className='flex gap-3 cursor-pointer '>
                    <div className='flex flex-col text-[16px] font-semibold gap-3  truncate'>
                        <h4>{service?.title}</h4>
                    </div>
                </div>
                <Characteristics
                    className='gap-2 mt-4'
                    data={[
                        { key: 'Длительность:', value: service?.duration.toString() || '0' },
                        { key: 'Лечилось:', value: '120' },
                    ]}
                />
            </BoxWrapper>
        </>
    );
}
