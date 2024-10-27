import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

import Image from 'next/image';
import { useBlurStore } from '@/shared/store/blurStore';
import { Calendar } from '@/components/ui/calendar';
import { CalendarForApi } from '@/components/ui/calendarForApi';
import { IAppointment } from '@/shared/types/appointment.interface';
import { TimeCiel } from '@/components/ui/time-ceil';
const SET_DATES = gql(`
mutation SetAvailableDates ($availableInput: AvailableDateInput!){
    setAvailableDates(availableDateInput: $availableInput)
}

`);

export default function ChangeAppointmentCard({
    show,
    className,
    setShow,
    appointment,
}: {
    show: boolean;
    className?: string;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    appointment: IAppointment;
}) {
    const { setBlur } = useBlurStore();
    const [mutate] = useMutation(SET_DATES, {
        onCompleted() {
            appointment.status = 'Pending';
        },
    });
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');

    const handleClose = () => {
        setBlur(false);
        setShow(false);
    };

    return (
        <div
            className={cn(
                'slider:max-w-[553px] slider:h-fit absolute z-[350] flex flex-col left-0 right-0 mx-auto rounded-[12px] px-[50px] py-[30px] bottom-0 top-0 my-auto bg-white-background not_found:w-screen not_found:h-screen ',
                !show && 'hidden',
                className,
            )}>
            <div className='flex'>
                <div className='flex flex-col gap-3 w-full'>
                    <div className='flex-between'>
                        <Text className='text-[16px] font-medium'>Укажите дату и время</Text>
                        <Image
                            src={'/assets/close-i.svg'}
                            width={20}
                            height={20}
                            alt='close'
                            className='absolute right-0 top-0 m-[13px] mt-6 mr-6 cursor-pointer '
                            onClick={() => handleClose()}
                        />
                    </div>
                    <CalendarForApi
                        className='mx-auto'
                        setDate={setDate}
                        dates={appointment.availableDates.map((apDate) => new Date(apDate.date))}
                    />
                    <div className='grid grid-cols-4 desktop:grid-cols-5 gap-3'>
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
                </div>
            </div>
        </div>
    );
}
