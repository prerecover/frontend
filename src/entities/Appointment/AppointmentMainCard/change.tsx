import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { gql, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useBlurStore } from '@/shared/store/blurStore';
import { CalendarForApi } from '@/components/ui/calendarForApi';
import { IAppointment } from '@/shared/types/appointment.interface';
import { TimeCiel } from '@/components/ui/time-ceil';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
const times = [
    '09:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:30',
    '17:00',
    '17:30',
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
];
const CHANGE_DATE = gql(`
mutation ChangeDate ($appointmentId: String!, $timeStart: Date!){
    changeDate(appointmentId: $appointmentId, timeStart: $timeStart)
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
    const [mutate] = useMutation(CHANGE_DATE, {
        onCompleted() {
            toast({ title: 'Время успешно перенесено', variant: 'positive' });
            location.reload();
            appointment.status = 'In process';
        },
    });
    const [time, setTime] = useState('');
    const { toast } = useToast();
    const availableDatesList = appointment.availableDates.map((avDate) => new Date(avDate.date));
    const [date, setDate] = useState(new Date());
    const handleClose = () => {
        setBlur(false);
        setShow(false);
    };

    const handleMutate = () => {
        const copyDate = date;
        copyDate.setHours(parseInt(time.slice(0, 2)));
        copyDate.setMinutes(parseInt(time.slice(3, 5)));
        mutate({ variables: { appointmentId: appointment._id, timeStart: copyDate } });
    };

    const checkCeil = (ceil: string) => {
        const copyDate = date;
        copyDate.setHours(parseInt(ceil.slice(0, 2)));
        copyDate.setMinutes(parseInt(ceil.slice(3, 5)));
        return availableDatesList.map((dateEl) => dateEl.getTime()).includes(copyDate.getTime());
    };
    useEffect(() => {
        setTime('');
    }, [date]);

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
                    <CalendarForApi className='mx-auto' setDate={setDate} dates={availableDatesList} />
                    <div className='grid grid-cols-4 desktop:grid-cols-5 gap-3'>
                        {times.map((ceil) => (
                            <TimeCiel
                                time={time}
                                setTime={setTime}
                                visible={checkCeil(ceil) && true}
                                value={ceil}
                                key={ceil}
                            />
                        ))}
                    </div>
                    <Button onClick={() => handleMutate()}>Изменить</Button>
                </div>
            </div>
        </div>
    );
}
