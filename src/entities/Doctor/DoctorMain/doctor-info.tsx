import { Text } from '@/components/ui/text';
import { IDoctor } from '@/shared/types/doctor.interface';

export default function DoctorInfo({ doctor }: { doctor: IDoctor }) {
    return (
        <>
            <div className='flex gap-5'>
                <div className='flex-col flex gap-2'>
                    <div className='flex items-center text-[14px] gap-1 font-normal'>
                        <Text type='h5' className='text-grey-700'>
                            Страна:
                        </Text>
                        <Text type='h5' fz={500}>
                            {doctor.city}
                        </Text>
                    </div>
                    <div className='flex items-center text-[14px] gap-1 font-normal'>
                        <Text type='h5' className='text-grey-700'>
                            Город:
                        </Text>
                        <Text type='h5' fz={500}>
                            {doctor.city}
                        </Text>
                    </div>
                </div>
                <div className='flex-col flex gap-2'>
                    <div className='flex items-center text-[14px] gap-1 font-normal'>
                        <Text type='h5' className='text-grey-700'>
                            Специальность:
                        </Text>
                        <Text type='h5' fz={500}>
                            {doctor.specialization}
                        </Text>
                    </div>
                    <div className='flex items-center text-[14px] gap-1 font-normal'>
                        <Text type='h5' className='text-grey-700'>
                            Опыт:
                        </Text>
                        <Text type='h5' fz={500}>
                            {doctor.workExp}
                        </Text>
                    </div>
                </div>
            </div>
        </>
    );
}
