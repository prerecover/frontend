import { IAdminStats } from '@/shared/types/stats';

import BoxWrapper from '@/components/ui/box-wrapper';
import { Text } from '@/components/ui/text';
import { Param } from '../users-stats/param';

export default function AdminStats({ adminStats }: { adminStats: IAdminStats }) {
    return (
        <BoxWrapper color='white' className='px-[30px] py-[22px] border-none w-full'>
            <Text className='text-[22px] font-medium mb-[26px]'>Работа администратора</Text>
            <div className='flex gap-[18px] w-full flex-col'>
                <Param text='Записей на проверке' count={adminStats.inProcessAppointments} />
                <Param text='Подтверждено записей' count={adminStats.approovedAppointments} />
                <Param text='Измененных записей' count={adminStats.pendingAppointments} />
                <Param text='Осталось опросов' count={adminStats.inProcessAppointments} />
            </div>
        </BoxWrapper>
    );
}
