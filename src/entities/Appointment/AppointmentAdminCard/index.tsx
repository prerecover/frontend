import { Text } from '@/components/ui/text';
import { Characteristics } from '@/entities/Common/characteristics';
import { IAppointment } from '@/shared/types/appointment.interface';
import { decodeDate, formatDate } from '@/shared/utils/formatDate';
import { usePathname, useRouter } from 'next/navigation';
import { Info } from '../AppointmentMainCard/info';
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
import SurveyDialog from '@/features/SurveyDialog';
import { useSurveyDialogStore } from '@/shared/store/surveyDialog';
import { useState } from 'react';

export default function AppointmentAdminCard({ appointment }: { appointment: IAppointment }) {
    const router = useRouter();
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
    const { setShowSurveyDialog, showSurveyDialog } = useSurveyDialogStore();

    const hangleDialog = () => {
        setFirstDialog(false);
        setShowSurveyDialog(true);
    };

    return (
        <div className='flex flex-col relative'>
            <div className='flex flex-col p-[20px] bg-white rounded-[12px]'>
                <div className='flex-between'>
                    <div className='flex flex-col'>
                        <Text type='h3' className='text-[12px] font-medium text-grey-700'>
                            Названия записи
                        </Text>
                        <Text type='h1' className='text-[16px] font-semibold mt-[7px]'>
                            {appointment.title}
                        </Text>
                    </div>
                    <div className='flex gap-1'>
                        <Text className='text-grey text-[12px] font-medium'>Запись создана:</Text>
                        <Text className='text-[12px] font-medium'>{formatDate(new Date(appointment.createdAt))}</Text>
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
                <Info dateAppointment={dateAppointment} timeAppointment={timeAppointment} duration={duration || 0} />
                <div className='w-full h-[1px] bg-blue-100 px-5 mt-4 mb-4'></div>
                <div className='flex gap-3'>
                    {pathname.includes('check-appointments') ? (
                        <>
                            <Button className='w-full' onClick={() => console.log('asd')}>
                                Подтвердить
                            </Button>
                            <Button className='bg-red-400 w-full'>Отклонить</Button>
                        </>
                    ) : (
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
                            <SurveyDialog appointmentTitle={appointment.title} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
