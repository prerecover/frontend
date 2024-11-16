import { Text } from '@/components/ui/text';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';
import Link from 'next/link';

export default function DoctorSlideCard({ doctor }: { doctor: IDoctor }) {
    return (
        <Link
            className='flex items-center bg-white text-center cursor-pointer border-[1px] border-blue-100 border-solid rounded-[20px]'
            href={`/doctor/${doctor?._id}`}>
            <Image
                src={doctor?.avatar ? doctor?.avatar : '/assets/doctor.svg'}
                alt='avatar'
                className='rounded-[50%] mx-4 my-[30px]'
                width={55}
                height={55}
            />
            <div className='flex flex-col'>
                <Text className='text-[18px] font-medium whitespace-nowrap '>
                    {`${doctor?.lastName} ${doctor?.firstName} ${doctor?.surname}`}
                </Text>
                <Text position='start' className='text-[14px] font-medium text-grey-500'>
                    {doctor?.specialization}
                </Text>
            </div>
        </Link>
    );
}
