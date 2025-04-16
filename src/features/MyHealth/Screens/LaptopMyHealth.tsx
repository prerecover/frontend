import UpcomingEntries from '@/features/MyHealth/UpcomingEntries';
import StatisticBlock from '@/features/MyHealth/StatisticBlock';
import History from '@/features/MyHealth/History';
import Skeleton from '@/components/common/Skeleton';
import Activity from '@/features/MyHealth/Activity';

export default function LaptopMyHealth() {
  return (
    <div className="flex flex-col gap-3.5 p-4">
      <div className="flex gap-3.5 max-h-[230px] min-h-[230px]">
        <UpcomingEntries />
        <Activity />
      </div>

      <div className="flex gap-3.5 min-h-[473px]">
        <Skeleton />
        <StatisticBlock />
      </div>

      <History />
    </div>
  );
}
