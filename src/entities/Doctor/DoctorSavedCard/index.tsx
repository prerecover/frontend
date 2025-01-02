import { Text } from '@/components/ui/text';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';

export default function DoctorSavedCard({ doctor }: { doctor: IDoctor }) {
    console.log(doctor);
    return (
        <div className='flex items-center w-[318px] h-[101px] rounded-[12px] border-[1px] border-blue-200 border-solid px-[14px] py-[23px] gap-3'>
            <Image
                src={doctor.avatar || '/assets/doctor.svg'}
                width={54}
                height={54}
                className='rounded-full object-cover'
                alt='doctor'
            />
            <div className='flex flex-col min-w-0'>
                <Text className='text-[16px] font-medium truncate'>
                    {doctor.lastName} {doctor.firstName} {doctor.surname}
                </Text>
                <Text className='text-[12px] text-grey-700 font-medium'>{doctor.specialization}</Text>
            </div>
        </div>
    );
}
