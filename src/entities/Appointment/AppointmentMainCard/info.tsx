import { Text } from '@/components/ui/text';
import Image from 'next/image';
import { FC } from 'react';

interface InfoProps {
    dateAppointment: string;
    timeAppointment: string;
    duration: number;
}

export const Info: FC<InfoProps> = ({ dateAppointment, timeAppointment, duration }) => {
    return (
        <div className='flex justify-between '>
            <div className='flex gap-2 items-center'>
                <Image src={'/assets/calendar.svg'} width={20} height={20} alt='calendar' />
                <Text type='h4' className='text-[12px] font-medium'>
                    {dateAppointment}
                </Text>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src={'/assets/alarm-clock.svg'} width={20} height={20} alt='calendar' />
                <Text type='h4' className='text-[12px] font-medium'>
                    {timeAppointment}
                </Text>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src={'/assets/clock-fast-forward.svg'} width={20} height={20} alt='calendar' />
                <Text type='h4' className='text-[12px] font-medium'>
                    {duration} минут
                </Text>
            </div>
        </div>
    );
};
