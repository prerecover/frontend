import BoxWrapper from '@/components/ui/box-wrapper';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { IDoctor } from '@/shared/types/doctor.interface';
import Image from 'next/image';

export default function DoctorAddAppmntCard({ doctor, active }: { doctor: IDoctor; active: boolean }) {
    return (
        <>
            <BoxWrapper
                color='white'
                className={cn('w-full border-blue-100', active && 'border-blue border-solid border-[1px]')}>
                <div className='flex gap-3 cursor-pointer h-full items-center'>
                    <Image
                        src={doctor.avatar || '/assets/doctor.svg'}
                        width={30}
                        height={30}
                        className='rounded-full w-[42px] h-[42px] object-cover'
                        alt='doctor'
                    />
                    <div className='flex flex-col'>
                        <Text
                            type='h3'
                            className='font-semibold text-[15px]'>{`${doctor.lastName} ${doctor.firstName?.charAt(0) + '.'} ${doctor.surname?.charAt(0) + '.'}  `}</Text>
                    </div>
                </div>
            </BoxWrapper>
        </>
    );
}
