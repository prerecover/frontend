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
    <>
      {upcomingEntriesData?.length ? (
        <div className="overflow-y-auto w-80 max-sm:!w-full max-md:w-73 flex-shrink-0 max-sm:shrink">
          <ListCards entries={upcomingEntriesData} />
        </div>
      ) : (
        <EmptyWindow />
      )}
    </>
  );
}
