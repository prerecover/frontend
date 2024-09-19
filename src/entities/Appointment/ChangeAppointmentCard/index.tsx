import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { IAppointment } from '@/shared/types/appointment.interface';
import { formatDate } from '@/shared/utils/formatDate';
import { gql, useMutation } from '@apollo/client';
import { useState } from 'react';

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
    const [mutate] = useMutation(SET_DATES, {
        onCompleted() {
            appointment.status = 'Pending';
            setChangeDate(false);
        },
    });
    const [date, setDate] = useState<Date>(new Date());
    const [dates, setDates] = useState<Date[]>([]);

    const handleDate = (dateEl: Date) => {
        if (dates.includes(dateEl)) {
            return;
        } else {
            setDates([...dates, dateEl]);
        }
    };

    const handleMutate = () => {
        const availableInput = { appointmentId: appointment._id, availableDates: dates };
        mutate({ variables: { availableInput } });
    };

    return (
        <div className={cn('flex flex-col p-2 rounded-[12px] bg-white', className)}>
            <Text position='center' className='text-[16px] font-medium'>
                Выберите несколько доступных дат
            </Text>
            <div className='flex gap-3'>
                <Calendar setDate={setDate} />
                <div className='flex flex-col gap-3'>
                    {dates.map((dateEl, i) => (
                        <Text key={i}>{formatDate(dateEl)}</Text>
                    ))}
                    <Button className='min-w-[170px]' variant={'outline'} onClick={() => handleDate(date)}>
                        Выбрать
                    </Button>
                    {dates.length >= 3 && (
                        <Button className='min-w-[170px]' onClick={() => handleMutate()}>
                            Подтвердить
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
