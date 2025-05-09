import UpcomingEntries from '@/features/MyHealth/UpcomingEntries';
import StatisticBlock from '@/features/MyHealth/StatisticBlock';
import History from '@/features/MyHealth/History';
import Skeleton from '@/components/common/Skeleton';
import Activity from '@/features/MyHealth/Activity';
import { useUserStore } from '@/shared/store/userStore';
import { IAppointment } from '../types/appointment.types';

interface ILaptopMyHealthProps {
  appointments: IAppointment[];
}

export default function LaptopMyHealth({ appointments }: ILaptopMyHealthProps) {
  const { getUser } = useUserStore();
  const user = getUser();

  return (
    <div className="flex flex-col gap-3.5 p-4">
      <div className="flex gap-3.5 max-h-56 min-h-56">
        <UpcomingEntries upcomingEntriesData={appointments} />
        <Activity />
      </div>

      <div className="flex gap-3.5 min-h-100">
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

      <History appointemtns={appointments} />
    </div>
  );
}
