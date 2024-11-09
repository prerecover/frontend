import { Text } from '@/components/ui/text';
import { Characteristics } from '@/entities/Common/characteristics';
import { IAppointment } from '@/shared/types/appointment.interface';
import { decodeDate } from '@/shared/utils/formatDate';
import { Info } from './info';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
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
import { useState } from 'react';
import { useBlurStore } from '@/shared/store/blurStore';
import ChangeAppointmentCard from './change';
const REJECT = gql(`
mutation SetStatus($appointmentId: String!){
    setStatusAppointment(appointmentId: $appointmentId, status: "Rejected") {
        _id
 
    }
}
`);

export default function AppointmentMainCard({ appointment }: { appointment: IAppointment }) {
    const router = useRouter();
    const pathname = usePathname();
    const dateAppointment = decodeDate(new Date(appointment.timeStart));
    const [reject] = useMutation(REJECT, {
        onCompleted() {
            location.reload();
        },
    });
    const minutes =
        new Date(appointment.timeStart).getMinutes() < 10
            ? `0${new Date(appointment.timeStart).getMinutes()}`
            : new Date(appointment.timeStart).getMinutes();
    const timeAppointment = `${new Date(appointment.timeStart).getHours()}:${minutes}`;
    const duration = appointment.service?.duration;
    const doctorSpecialization = `${appointment.doctor?.specialization.charAt(0).toUpperCase() + appointment.doctor?.specialization.slice(1)}`;
    const doctorName = `${appointment.doctor.lastName} ${appointment.doctor.firstName.charAt(0).toUpperCase()}.${appointment.doctor.surname.charAt(0).toUpperCase()}`;
    const [showChange, setShowChange] = useState(false);
    const { setBlur } = useBlurStore();

    const handlePickDate = () => {
        setShowChange(true);
        setBlur(true);
    };

    return (
        <>
            {appointment.availableDates.length > 0 && (
                <ChangeAppointmentCard show={showChange} setShow={setShowChange} appointment={appointment} />
            )}
            <div className={cn(`flex flex-col relative border-[1px] border-blue-100 rounded-[12px] border-solid`)}>
                {appointment.status == 'Rejected' ? (
                    <Text className='text-red-400 text-[38px] absolute z-40 bottom-28 right-44' position='center'>
                        Отказано
                    </Text>
                ) : (
                    <></>
                )}
                <div
                    className={cn(
                        `flex flex-col p-[20px] bg-white rounded-[12px] cursor-pointer relative`,
                        appointment.status === 'In process' && 'opacity-35',
                        appointment.status === 'Rejected' && 'opacity-35',
                    )}>
                    <div className='flex-between' onClick={() => router.push(`/appointments/${appointment._id}`)}>
                        <Text type='h3' className='text-[12px] font-medium text-grey-700'>
                            Названия записи
                        </Text>
                        <div className={cn(pathname.includes('history') && 'hidden')}>
                            {appointment.status === 'Approoved' ? (
                                <Text className='text-green text-[16px] font-medium'>Подтверждена</Text>
                            ) : appointment.status === 'Pending' ? (
                                <Text className='text-[16px] font-medium text-red-400'>Выбранное время занято</Text>
                            ) : appointment.status === 'In process' ? (
                                <Text className='text-yellow-400 text-[16px] font-medium'>В ожидании</Text>
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <Text type='h1' className='text-[16px] font-semibold mt-[7px]'>
                        {appointment.title}
                    </Text>

                    <Characteristics
                        className='gap-3 mt-3'
                        data={[
                            {
                                key: 'Формат:',
                                value: appointment.online ? 'Online' : 'Offline',
                                className: appointment.online ? 'text-green' : 'text-red-400',
                            },
                            { key: 'Предназначена:', value: 'Пока незнаю что сюда вставить' },
                            { key: 'Создана:', value: `${doctorSpecialization} ${doctorName}` },
                            {
                                key: 'Версия:',
                                value: 'USA',
                            },
                        ]}
                    />
                    <div className='w-full h-[1px] bg-blue-100 px-5 mt-4 mb-4'></div>
                    <Info
                        dateAppointment={dateAppointment}
                        timeAppointment={timeAppointment}
                        duration={duration || 0}
                    />
                    <div
                        className={cn(
                            'flex m-4 gap-4',
                            pathname.includes('history') || (appointment.status !== 'Pending' && 'hidden'),
                        )}>
                        <Button variant={'outline'} className='w-full' onClick={() => handlePickDate()}>
                            Изменить
                        </Button>
                        <AlertDialog>
                            <AlertDialogTrigger className='w-full bg-white text-red-400 border-red-400 border-solid border-[1px] rounded-[12px] font-semibold text-[15px]'>
                                Отменить
                            </AlertDialogTrigger>
                            <AlertDialogContent className='bg-white border-none rounded-[12px]'>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Вы уверены?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        После отмены запись не подлежит восстановлению, внимательно изучите детали
                                        прежде чем отклонить запись
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
        </>
    );
}
