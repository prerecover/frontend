import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import DoctorInfo from '@/entities/Doctor/DoctorMain/doctor-info';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';

export default function DoctorStats({ doctor }: { doctor: IDoctor }) {
    return (
        <div className='flex flex-col p-[30px] h-full'>
            <div className='flex mobile:hidden w-[490px]'>
                <Image
                    src={doctor.avatar || '/assets/doctor.svg'}
                    alt='doctor'
                    width={120}
                    height={120}
                    className='desktop:w-[120px] desktop:h-[120px] w-14 h-14 rounded-full'
                />
                <div className='flex flex-col gap-2'>
                    <Text
                        type='h4'
                        className='text-[20px] my-auto pl-2 font-semibold'>{`${doctor.firstName} ${doctor.lastName}`}</Text>
                    <DoctorInfo doctor={doctor} className='mobile:hidden pl-2' />
                </div>
            </div>
            <div className='flex flex-col mobile:hidden'>
                <Text className='font-semibold text-[16px] mt-[30px]' type='h2'>
                    Лечилось всего:
                </Text>
                <Text className='mx-auto mt-[15px] text-[32px] font-medium' type='h4'>
                    3245
                </Text>
                <Progress value={60} className=' h-[6px] mt-4 w-full' color='#FFFFFF' />
            </div>
            <div className='flex flex-col mobile:hidden mt-[80px] gap-8 my-auto h-full justify-center'>
                <div className='flex-between'>
                    <Text className='text-[16px] font-medium text-grey-700'>Помощь в лечении</Text>
                    <Text className='text-[18px]'>64%</Text>
                </div>
                <div className='flex-between'>
                    <Text className='text-[16px] font-medium text-grey-700'>Ответственность</Text>
                    <Text className='text-[18px]'>64%</Text>
                </div>
                <div className='flex-between'>
                    <Text className='text-[16px] font-medium text-grey-700'>Точность в рассчетах</Text>
                    <Text className='text-[18px]'>64%</Text>
                </div>
                <div className='flex-between'>
                    <Text className='text-[16px] font-medium text-grey-700'>Точность в лечении</Text>
                    <Text className='text-[18px]'>64%</Text>
                </div>
            </div>
        </div>
    );
}
