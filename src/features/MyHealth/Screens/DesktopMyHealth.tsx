"use client"

import UpcomingEntries from '@/features/MyHealth/UpcomingEntries';
import StatisticBlock from '@/features/MyHealth/StatisticBlock';
import History from '@/features/MyHealth/History';
import Skeleton from '@/components/common/Skeleton';
import Activity from '@/features/MyHealth/Activity';
import { IAppointment } from '../types/appointment.types';
import { useUserStore } from '@/shared/store/userStore';

interface IDesktopMyHealthProps {
  appointments: IAppointment[]
}

export default function DesktopMyHealth({appointments}: IDesktopMyHealthProps) {

  const {getUser} = useUserStore()
  const user = getUser()
  
  return (
    <div className="flex w-full px-4 pt-4 justify-between h-screen overflow-hidden">
      <div className="flex flex-col gap-3.5 flex-1 overflow-hidden">
        <div className="flex gap-3.5 h-auto">
          <UpcomingEntries upcomingEntriesData={appointments}/>
          <StatisticBlock recordCompletedData={appointments.map(appointment => ({
            id: appointment.id,
            title: appointment.title ?? '',
            effectivity: appointment?.effectivity ?? 0,
            successInTreatment: appointment?.successInTreatment ?? 0,
          }))}/>
        </div>

        <History appointemtns={appointments}/>
      </div>

      <div className="flex flex-col gap-3.5 w-[406px] flex-shrink-0 ml-3.5 overflow-hidden h-full">
        <Skeleton value={user?.detail?.learning ?? 0}/>
        <Activity />
      </div>
    </div>
  );
}