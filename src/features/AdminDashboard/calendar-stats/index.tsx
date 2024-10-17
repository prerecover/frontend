import BoxWrapper from '@/components/ui/box-wrapper';
import { Text } from '@/components/ui/text';
import { ICalendarStats } from '@/shared/types/stats';
import { Param } from '../users-stats/param';

export default function CalendarStats({ calendarStats }: { calendarStats: ICalendarStats }) {
    return (
        <BoxWrapper color='white' className='px-[30px] py-[22px] border-none'>
            <Text className='text-[22px] font-medium mb-[26px]'>Электронный календарь</Text>
            <div className='flex gap-[18px] w-full'>
                <div className='w-full gap-[18px] flex flex-col'>
                    <Text className='text-[16px] font-medium mb-[26px]'>Клиника</Text>
                    <Param text='Редактирует эл.календарь клиника' count={calendarStats.changeByClinic} />
                    <Param text='Заходили в эл.календарь' count={calendarStats.visitCalendar} />
                    <Param text='Не заходили в эл.календарь' count={calendarStats.noVisitCalendar} />
                </div>
                <div className='w-[1px] h-[274px] bg-blue-200 mx-3'></div>
                <div className='w-full gap-[18px] flex flex-col'>
                    <Text className='text-[16px] font-medium mb-[26px]'>PreRecover</Text>
                    <Param text='Создано опросов' count={calendarStats.changeByCompany} />
                    <Param text='Удаленные аккаунты' count={calendarStats.inProcessAppointments} />
                </div>
            </div>
        </BoxWrapper>
    );
}
