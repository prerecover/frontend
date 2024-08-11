import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { IAppointment } from '@/shared/types/appointment.interface';
import { decodeDate, fullTime } from '@/shared/utils/formatDate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AppointmentsWarn({ appointment }: { appointment: IAppointment }) {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const { hours, minutes, day, year, month } = fullTime(new Date(appointment.timeStart));
    const title = `${day}.${month}.${year.toString().slice(2, 4)} / ${hours}:${minutes}`;
    return (
        <div
            className={cn(
                'bg-blue flex flex-col desktop:max-w-[660px] desktop:mt-4 w-full m-auto  transition-all rounded-[10px] cursor-default pc:hidden',

                open ? 'h-[195px]' : 'h-[32px]',
            )}>
            <div
                className={cn('bg-blue transition-all flex justify-between rounded-[10px]')}
                onClick={() => setOpen(!open)}>
                {!open ? (
                    <Text
                        type='p'
                        className={cn(
                            'text-white text-[14px] font-medium flex transition-all',
                            open ? 'p-4' : 'px-4 pt-[5px]',
                        )}>
                        Запись &quot;{appointment.title}&quot; на {title}
                    </Text>
                ) : (
                    <Text type='p' className={'text-white text-[16px] font-medium flex p-4 transition-all'}>
                        Запись &quot;{appointment.title}&quot;
                    </Text>
                )}
                <Image
                    src={!open ? '/assets/white-arrow-down.svg' : '/assets/white-arrow-up.svg'}
                    width={20}
                    height={20}
                    className={cn('w-[20px] h-[20px] transition-all', open ? 'm-4' : 'mx-4 mt-[5px]')}
                    alt='full'
                />
            </div>
            {open && (
                <div className='flex flex-col px-4 gap-[20px]'>
                    <Text type='p' className='text-[12px] font-medium text-white'>
                        Клиника: {appointment.clinic.title}
                    </Text>
                    <div className='flex justify-between mr-[80px]'>
                        <div className='flex gap-[6px]'>
                            <Image src={'/assets/white-calendar.svg'} width={20} height={20} alt='calendar' />
                            <Text className='text-[12px] font-medium text-white' type='p'>
                                {decodeDate(new Date(appointment.timeStart))}
                            </Text>
                        </div>
                        <div className='flex gap-[6px]'>
                            <Image src={'/assets/white-alarm-clock.svg'} width={20} height={20} alt='time' />
                            <Text className='text-[12px] font-medium text-white' type='p'>
                                {hours}:{minutes}
                            </Text>
                        </div>
                        <div className='flex gap-[6px]'>
                            <Image src={'/assets/white-clock-fast-forward.svg'} width={20} height={20} alt='time' />
                            <Text className='text-[12px] font-medium text-white' type='p'>
                                {appointment.duration || 0} минут
                            </Text>
                        </div>
                    </div>
                    <Button
                        variant={'outline'}
                        className='text-white border-white'
                        onClick={() => router.push('/appointments')}>
                        Перейти в запись
                    </Button>
                </div>
            )}
        </div>
    );
}
