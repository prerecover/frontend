import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { IAppointment } from '@/shared/types/appointment.interface';
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { TimeCiel } from '@/components/ui/time-ceil';
import Image from 'next/image';
import { useBlurStore } from '@/shared/store/blurStore';
import DateCard from './date-card';
const SET_DATES = gql(`
mutation SetAvailableDates ($availableInput: AvailableDateInput!){
    setAvailableDates(availableDateInput: $availableInput)
}

`);

export default function ChangeAppointmentCard({
    appointment,
    className,
    setChangeDate,
}: {
    appointment: IAppointment;
    className?: string;
    setChangeDate: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const { setBlur } = useBlurStore();
    const [mutate] = useMutation(SET_DATES, {
        onCompleted() {
            appointment.status = 'Pending';
            setChangeDate(false);
        },
    });
    const [date, setDate] = useState<Date>(new Date());
    const [dates, setDates] = useState<number[]>([]);
    const [time, setTime] = useState<string>('');

    const getCeils = (dateEl: string): string[] => {
        const ceils: string[] = [];
        dates.forEach((dateFlEl) => {
            if (new Date(dateFlEl).getDate() === new Date(dateEl).getDate()) {
                ceils.push(
                    `${new Date(dateFlEl).getHours() < 10 ? 0 : ''}${new Date(dateFlEl).getHours()}:${new Date(dateFlEl).getMinutes()}${new Date(dateFlEl).getMinutes() < 10 ? 0 : ''}`,
                );
            }
        });
        return ceils;
    };

    const handleDate = (dateEl: Date, { hours, minutes }: { hours: number; minutes: number }) => {
        const newDate = new Date(dateEl);
        if (dates.includes(newDate.setHours(hours, minutes))) {
            return;
        } else {
            setDates([...dates, newDate.setHours(hours, minutes)]);
        }
        filterDates();
    };

    const handleMutate = () => {
        const availableInput = { appointmentId: appointment._id, availableDates: dates };
        mutate({ variables: { availableInput } });
        setBlur(false);
    };

    const filterDates = () => {
        const seen = new Set();
        dates
            .map((date) => new Date(date).toUTCString())
            .filter((date) => !seen.has(date.slice(0, 16)) && seen.add(date.slice(0, 16)));
        return Array.from(seen) as string[];
    };

    const handleClose = () => {
        setChangeDate(false);
        setBlur(false);
    };

    const parseTime = (time: string) => {
        const hours = parseInt(time.slice(0, 2));
        const minutes = parseInt(time.slice(3, 5));
        return { hours, minutes };
    };
    return (
        <motion.div
            initial={{ y: -300, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 300, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 50 }}
            className={cn(
                'w-[988px] h-[740px] absolute z-[200] flex flex-col bg-white left-0 right-0 mx-auto rounded-[12px] p-8',
                className,
            )}>
            <div className='flex'>
                <div className='flex flex-col gap-3'>
                    <Text className='text-[16px] font-medium'>Укажите дату и время</Text>
                    <Calendar setDate={setDate} />
                    <div className='grid grid-cols-5 gap-3 max-w-[430px]'>
                        <TimeCiel value='09:30' setTime={setTime} time={time} />
                        <TimeCiel value='10:00' setTime={setTime} time={time} />
                        <TimeCiel value='10:30' setTime={setTime} time={time} />
                        <TimeCiel value='11:00' setTime={setTime} time={time} />
                        <TimeCiel value='11:30' setTime={setTime} time={time} />
                        <TimeCiel value='13:30' setTime={setTime} time={time} />
                        <TimeCiel value='14:00' setTime={setTime} time={time} />
                        <TimeCiel value='14:30' setTime={setTime} time={time} />
                        <TimeCiel value='15:00' setTime={setTime} time={time} />
                        <TimeCiel value='15:30' setTime={setTime} time={time} />
                        <TimeCiel value='16:00' setTime={setTime} time={time} />
                        <TimeCiel value='16:30' setTime={setTime} time={time} />
                        <TimeCiel value='17:00' setTime={setTime} time={time} />
                        <TimeCiel value='17:30' setTime={setTime} time={time} />
                        <TimeCiel value='18:30' setTime={setTime} time={time} />
                        <TimeCiel value='19:00' setTime={setTime} time={time} />
                        <TimeCiel value='19:30' setTime={setTime} time={time} />
                        <TimeCiel value='20:00' setTime={setTime} time={time} />
                        <TimeCiel value='20:30' setTime={setTime} time={time} />
                        <TimeCiel value='21:00' setTime={setTime} time={time} />
                    </div>
                    <Button
                        className='max-w-[430px] mt-4'
                        variant={date && time ? 'default' : 'outline'}
                        disabled={!(date && time)}
                        onClick={() => handleDate(date, parseTime(time))}>
                        Добавить
                    </Button>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex-between'>
                        <Text className='text-[16px] font-medium'>Выбранные даты и время</Text>
                        <Image
                            src={'/assets/close-i.svg'}
                            width={20}
                            height={20}
                            alt='close'
                            className='absolute right-0 top-0 m-[13px] mt-6 mr-6 cursor-pointer '
                            onClick={() => handleClose()}
                        />
                    </div>
                    <div className='gap-3 grid grid-cols-3 '>
                        {filterDates().map((dateEl, i) => (
                            <DateCard
                                date={new Date(dateEl)}
                                key={i}
                                ceils={getCeils(dateEl)}
                                dates={dates}
                                setDates={setDates}
                            />
                        ))}
                    </div>
                    {dates.length >= 3 && (
                        <Button className='min-w-[170px] m-4' onClick={() => handleMutate()}>
                            Подтвердить
                        </Button>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
