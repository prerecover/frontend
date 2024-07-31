import { Text } from '@/components/ui/text';
import Image from 'next/image';
import { FC } from 'react';

interface InfoProps {
    dateAppointment: string;
    startAppointment: string;
    endAppointment: string;
}

export const Info: FC<InfoProps> = ({ dateAppointment, startAppointment, endAppointment }) => {
    return (
        <div className='flex justify-start gap-4'>
            <div className='flex gap-2 items-center'>
                <Image src={'/assets/calendar.svg'} width={20} height={20} alt='calendar' />
                <Text type='h4' className='text-[12px] font-medium'>
                    {dateAppointment}
                </Text>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src={'/assets/alarm-clock.svg'} width={20} height={20} alt='calendar' />
                <Text type='h4' className='text-[12px] font-medium'>
                    {startAppointment} - {endAppointment}
                </Text>
            </div>
        </div>
    );
};
