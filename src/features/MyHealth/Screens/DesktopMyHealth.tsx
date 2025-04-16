import UpcomingEntries from '@/features/MyHealth/UpcomingEntries';
import StatisticBlock from '@/features/MyHealth/StatisticBlock';
import History from '@/features/MyHealth/History';
import Skeleton from '@/components/common/Skeleton';
import Activity from '@/features/MyHealth/Activity';

export default function DesktopMyHealth() {
  return (
    <div className="flex w-full px-4 pt-4 justify-between h-screen overflow-hidden">
      <div className="flex flex-col gap-3.5 flex-1 overflow-hidden">
        <div className="flex gap-3.5 h-auto">
          <UpcomingEntries />
          <StatisticBlock />
        </div>

        <History />
      </div>

      <div className="flex flex-col gap-3.5 w-[406px] flex-shrink-0 ml-3.5 overflow-hidden h-full">
        <Skeleton />
        <Activity />
      </div>
    </div>
  );
}
