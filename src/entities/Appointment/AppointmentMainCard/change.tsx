'use client';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { IAppointment } from '@/shared/types/appointment.interface';
import { formatDate, fullTime } from '@/shared/utils/formatDate';
import { useState } from 'react';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { gql, useMutation } from '@apollo/client';

const CHANGE_DATE = gql(`
mutation ChangeDate ($appointmentId: String!, $timeStart: Date!){
    changeDate(appointmentId: $appointmentId, timeStart: $timeStart)
}
`);

const REJECT = gql(`
mutation SetStatus($appointmentId: String!){
    setStatusAppointment(appointmentId: $appointmentId, status: "Rejected") {
        _id
 
    }
}
`);

export default function ChangeAppointmentMainCard({
    appointment,
    className,
}: {
    appointment: IAppointment;
    className?: string;
}) {
    const [active, setActive] = useState(appointment.availableDates[0]?.date);
    const [changeDate] = useMutation(CHANGE_DATE, {
        onCompleted() {
            location.reload();
        },
    });
    const [reject] = useMutation(REJECT, {
        onCompleted() {
            location.reload();
        },
    });
    return (
        <div className={cn('flex flex-col relative', className)}>
            <div className='flex flex-col p-[20px] bg-white rounded-[12px] relative border-yellow-400 border-solid border-[1px] hover:shadow-grey-900'>
                <div className='flex-between'>
                    <Text type='h3' className='text-[12px] font-medium text-grey-700'>
                        Названия записи
                    </Text>
                    <Text type='h1' className='text-[16px] font-semibold mt-[7px]'>
                        {appointment.title}
                    </Text>
                </div>
                <Text type='h1' className='text-[16px] font-semibold mt-[7px]' position='center'>
                    Выберите другую дату
                </Text>
                <div className='grid-cols-2 gap-3 grid'>
                    {appointment.availableDates?.map((dateEl, index) => (
                        <div
                            key={index}
                            className={cn(
                                'flex px-[20px] py-1 border-blue-200 rounded-[12px] border-solid border-[1px] cursor-pointer',
                                active === dateEl.date && 'bg-blue text-white',
                            )}
                            onClick={() => setActive(dateEl.date)}>
                            {formatDate(new Date(dateEl.date))} {fullTime(new Date(dateEl.date)).hours}:
                            {fullTime(new Date(dateEl.date)).minutes}
                        </div>
                    ))}
                </div>
                <div className='flex gap-3 mt-3'>
                    <Button
                        className='w-full'
                        onClick={() =>
                            changeDate({ variables: { appointmentId: appointment._id, timeStart: new Date(active) } })
                        }>
                        Выбрать дату
                    </Button>
                    <AlertDialog>
                        <AlertDialogTrigger className='w-full bg-red-400 text-white rounded-[12px] font-semibold text-[15px]'>
                            Отменить запись
                        </AlertDialogTrigger>
                        <AlertDialogContent className='bg-white border-none rounded-[12px]'>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    После отмены запись не подлежит восстановлению, внимательно изучите детали прежде
                                    чем отклонить запись
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Вернуться</AlertDialogCancel>
                                <AlertDialogAction
                                    className='bg-red-400'
                                    onClick={() => reject({ variables: { appointmentId: appointment._id } })}>
                                    Отменить
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
        </div>
    );
}
