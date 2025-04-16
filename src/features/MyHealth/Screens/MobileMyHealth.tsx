import UpcomingEntries from '@/features/MyHealth/UpcomingEntries';
import StatisticBlock from '@/features/MyHealth/StatisticBlock';
import History from '@/features/MyHealth/History';
import Skeleton from '@/components/common/Skeleton';
import Activity from '@/features/MyHealth/Activity';

export default function MobileMyHealth() {
  return (
    <div className="flex flex-col gap-3.5 p-4">
      <UpcomingEntries />
      <div className="flex gap-3.5 max-sm:overflow-auto">
        <Skeleton />
        <StatisticBlock />
      </div>
      <Activity />
      <History />
    </div>
  );
}
