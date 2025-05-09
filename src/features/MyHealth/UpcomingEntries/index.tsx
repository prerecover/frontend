import { UpcomingEntriesType } from '../types/appointment.types';
import EmptyWindow from './EpmtyWindow';
import ListCards from './ListCards';

interface IUpcomingEntriesProps {
  upcomingEntriesData: UpcomingEntriesType[];
}

export default async function UpcomingEntries({
  upcomingEntriesData,
}: IUpcomingEntriesProps) {
  return (
    <div className="overflow-y-auto flex flex-col min-w-72">
      {upcomingEntriesData?.length ? (
        <ListCards entries={upcomingEntriesData} />
      ) : (
        <EmptyWindow />
      )}
    </div>
  );
}
