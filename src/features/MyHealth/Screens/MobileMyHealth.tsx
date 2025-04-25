import UpcomingEntries from '@/features/MyHealth/UpcomingEntries';
import StatisticBlock from '@/features/MyHealth/StatisticBlock';
import History from '@/features/MyHealth/History';
import Skeleton from '@/components/common/Skeleton';
import Activity from '@/features/MyHealth/Activity';
import { IAppointment } from '../types/appointment.types';
import { useUserStore } from '@/shared/store/userStore';

interface IMobileMyHealthProps {
  appointments: IAppointment[]
}

export default function MobileMyHealth({appointments}: IMobileMyHealthProps) {


      const {getUser} = useUserStore()
      const user = getUser()
  

  return (
    <div className="flex flex-col gap-3.5 p-4">
        <UpcomingEntries upcomingEntriesData={appointments}/>
      <div className="flex gap-3.5 max-sm:overflow-auto">
        <Skeleton value={user?.detail?.learning ?? 0}/>
        <StatisticBlock recordCompletedData={appointments.map(appointment => ({
            id: appointment.id,
            title: appointment.title ?? '',
            effectivity: appointment?.effectivity ?? 0,
            successInTreatment: appointment?.successInTreatment ?? 0,
          }))}/>
      </div>
      <Activity />
      <History appointemtns={appointments}/>
    </div>
  );
}
