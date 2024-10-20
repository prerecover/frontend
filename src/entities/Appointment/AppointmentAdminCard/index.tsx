'use client';
import { Text } from '@/components/ui/text';
import { Characteristics } from '@/entities/Common/characteristics';
import { IAppointment } from '@/shared/types/appointment.interface';
import { decodeDate, formatDate } from '@/shared/utils/formatDate';
import { usePathname } from 'next/navigation';
import { Info } from '../AppointmentMainCard/info';
import { Button } from '@/components/ui/button';
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import SurveyDialog from '@/features/SurveyDialog';
import { useSurveyDialogStore } from '@/shared/store/surveyDialog';
import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import ChangeAppointmentCard from '../ChangeAppointmentCard';
import { cn } from '@/lib/utils';
import { useBlurStore } from '@/shared/store/blurStore';

const SET_STATUS_APPOINTMENT = gql(`
mutation SetStatusAppointment ($_id: String!, $status: String!){
    setStatusAppointment(appointmentId: $_id, status: $status) {
        _id
        status
    }
}
`);

export default function AppointmentAdminCard({ appointment }: { appointment: IAppointment }) {
    const [setStatus] = useMutation(SET_STATUS_APPOINTMENT, {
        onCompleted(data) {
            // toast({ variant: 'warning', title: 'Запись отклонена' });
            appointment.status = data.status;
        },
    });
    const [changeDate, setChangeDate] = useState(false);
    const { setBlur } = useBlurStore();
    const dateAppointment = decodeDate(new Date(appointment.timeStart));
    const minutes =
        new Date(appointment.timeStart).getMinutes() < 10
            ? `0${new Date(appointment.timeStart).getMinutes()}`
            : new Date(appointment.timeStart).getMinutes();
    const timeAppointment = `${new Date(appointment.timeStart).getHours()}:${minutes}`;
    const duration = appointment.service?.duration;
    const doctorName = `${appointment.doctor.lastName} ${appointment.doctor.firstName.charAt(0).toUpperCase()}.${appointment.doctor.surname.charAt(0).toUpperCase()}`;
    const pathname = usePathname();
    const [firstDialog, setFirstDialog] = useState(false);
    const { setShowSurveyDialog } = useSurveyDialogStore();

    const hangleDialog = () => {
        setFirstDialog(false);
        setBlur(true);
        setShowSurveyDialog(true);
    };

    const handleChangeAppointment = () => {
        setBlur(true);
        setChangeDate(!changeDate);
    };
    console.log(appointment.status);

    return (
        <div>
            <ChangeAppointmentCard
                appointment={appointment}
                className={`${changeDate === false && 'hidden '}`}
                setChangeDate={setChangeDate}
            />
            <div className={cn('flex flex-col relative', changeDate === true && 'hidden')}>
                <div className='flex flex-col p-[20px] bg-white rounded-[12px]'>
                    <div className='flex-between'>
                        <div className='flex flex-col'>
                            <Text type='h3' className='text-[12px] font-medium text-grey-700'>
                                Названия записи
                            </Text>
                            <Text type='h1' className='text-[16px] font-semibold mt-[7px]'>
                                {appointment.title || 'Без названия'}
                            </Text>
                        </div>
                        <div className='flex gap-1'>
                            <Text className='text-grey text-[12px] font-medium'>Запись создана:</Text>
                            <Text className='text-[12px] font-medium'>
                                {formatDate(new Date(appointment.createdAt))}
                            </Text>
                        </div>
                    </div>

                    <Characteristics
                        className='gap-3 mt-3 mb-5'
                        data={[
                            {
                                key: 'Формат:',
                                value: appointment.online ? 'Online' : 'Offline',
                                className: appointment.online ? 'text-green' : 'text-red-400',
                            },
                            { key: 'Клиника:', value: appointment.clinic.title, className: 'text-blue' },
                            { key: 'Врач:', value: `${doctorName}`, className: 'text-blue' },
                            {
                                key: 'Календарь:',
                                value: 'Google (API 123456)',
                            },
                        ]}
                    />
                    <Info
                        dateAppointment={dateAppointment}
                        timeAppointment={timeAppointment}
                        duration={duration || 0}
                    />
                    <div className='w-full h-[1px] bg-blue-100 px-5 mt-4 mb-4'></div>
                    <div className='flex gap-3 '>
                        {pathname.includes('admin/appointments') ? (
                            <>
                                {appointment.status == 'In process' ? (
                                    <>
                                        <Button
                                            className='w-full'
                                            onClick={() =>
                                                setStatus({ variables: { _id: appointment._id, status: 'Approoved' } })
                                            }>
                                            Подтвердить
                                        </Button>
                                        <Button
                                            className='bg-yellow-400 w-full'
                                            onClick={() => handleChangeAppointment()}>
                                            Изменить
                                        </Button>
                                    </>
                                ) : appointment.status == 'Rejected' ? (
                                    <Text position='center' className='text-red-400 mx-auto'>
                                        Отклонена
                                    </Text>
                                ) : appointment.status == 'Pending' ? (
                                    <Text position='center' className='text-yellow-400 mx-auto'>
                                        Изменена
                                    </Text>
                                ) : (
                                    <Text position='center' className='text-green mx-auto'>
                                        Подтверждена
                                    </Text>
                                )}
                            </>
                        ) : (
                            <>
                                {!appointment.survey ? (
                                    <>
                                        <AlertDialog open={firstDialog}>
                                            <AlertDialogTrigger asChild>
                                                <Button className='w-full' onClick={() => setFirstDialog(true)}>
                                                    Создать опрос
                                                </Button>
                                            </AlertDialogTrigger>
                                            <AlertDialogContent className='bg-white border-blue-100 rounded-[12px]'>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Выберите один из вариантов</AlertDialogTitle>
                                                </AlertDialogHeader>
                                                <div className='flex gap-4'>
                                                    <Button className='w-full' onClick={hangleDialog}>
                                                        Создать новый опрос
                                                    </Button>
                                                    <Button
                                                        className='w-full'
                                                        variant={'outline'}
                                                        onClick={() => console.log('asd')}>
                                                        Использовать шаблон
                                                    </Button>
                                                </div>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                        <SurveyDialog appointment={appointment} />
                                    </>
                                ) : (
                                    <Text className='mx-auto'>Опрос создан</Text>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
