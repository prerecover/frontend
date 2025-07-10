import UpcomingEntries from '@/features/MyHealth/UpcomingEntries';
import StatisticBlock from '@/features/MyHealth/StatisticBlock';
import History from '@/features/MyHealth/History';
import Skeleton from '@/components/common/Skeleton';
import Activity from '@/features/MyHealth/Activity';
import { IAppointment } from '../types/appointment.types';
import { useUserStore } from '@/shared/store/userStore';

interface IMobileMyHealthProps {
  appointments: IAppointment[];
}

export default function MobileMyHealth({ appointments }: IMobileMyHealthProps) {
  const { getUser } = useUserStore();
  const user = getUser();

  return (
    <div className="flex flex-col gap-3.5 px-4 pt-4 w-full">
      <UpcomingEntries upcomingEntriesData={appointments} />
      <div className="flex gap-3.5 max-sm:overflow-x-auto max-sm:whitespace-nowrap">
        <Skeleton value={user?.detail?.learning ?? 0} />
        <StatisticBlock
          recordCompletedData={appointments.map((appointment) => ({
            id: appointment.id,
            title: appointment.title ?? '',
            effectivity: appointment?.effectivity ?? 0,
            successInTreatment: appointment?.successInTreatment ?? 0,
          }))}
        />
      </div>
      <div className="flex flex-col">
        <Activity />
        <History appointemtns={appointments} />
      </div>
    </div>
  );
}
