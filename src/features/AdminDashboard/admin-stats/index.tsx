import { IAdminStats } from '@/shared/types/stats';

import BoxWrapper from '@/components/ui/box-wrapper';
import { Text } from '@/components/ui/text';
import { Param } from '../users-stats/param';

export default function AdminStats({ adminStats }: { adminStats: IAdminStats }) {
    return (
        <BoxWrapper color='white' className='px-[30px] py-[22px] border-none'>
            <Text className='text-[22px] font-medium mb-[26px]'>Работа администратора</Text>
            <div className='flex gap-[18px] w-full'>
                <div className='w-full gap-[18px] flex flex-col h-fit'>
                    <Param
                        text='Подтверждено записей'
                        count={adminStats.approovedAppointments}
                        className='h-[155px] flex flex-col items-start justify-between'
                    />
                </div>
                <div className='w-[1px] h-[274px] bg-blue-200 mx-3'></div>
                <div className='w-full gap-[18px] flex flex-col'>
                    <Param text='Изменено записей' count={adminStats.pendingAppointments} />
                    <Param text='Остаток записей' count={adminStats.inProcessAppointments} />
                </div>
            </div>
        </BoxWrapper>
    );
}
