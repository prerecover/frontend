import BoxWrapper from '@/components/ui/box-wrapper';
import { Text } from '@/components/ui/text';
import AppointmentChart from './chart-appointments';
import { IAppointmentStats } from '@/shared/types/stats';

export default function AppointmentStats({ appointmentStats }: { appointmentStats: IAppointmentStats }) {
    return (
        <div className='flex gap-4'>
            <BoxWrapper color='white' className='px-[30px] py-[22px] border-none w-[60%]'>
                <Text className='text-[22px] font-medium'>Записи</Text>
                <div className='flex gap-4'>
                    <AppointmentChart />
                </div>
            </BoxWrapper>
            <BoxWrapper color='white' className='px-[30px] py-[22px] border-none w-[40%]'>
                <div className='flex items-center gap-4 '>
                    <Text className='text-[16px] font-medium'>Всего записей</Text>
                    <Text className='text-[24px] font-medium'>{appointmentStats.totalAppointments}</Text>
                </div>
                <div className='flex items-center gap-4 '>
                    <Text className='text-[14px] font-medium text-grey-700'>За сегодня</Text>
                    <Text className='text-[14px] font-medium'>{appointmentStats.totalAppointments}</Text>
                </div>
                <div className='flex items-center gap-4 '>
                    <Text className='text-[14px] font-medium text-grey-700'>За вчера</Text>
                    <Text className='text-[14px] font-medium'>{appointmentStats.totalAppointments}</Text>
                </div>
                <div className='flex gap-4'></div>
            </BoxWrapper>
        </div>
    );
}
