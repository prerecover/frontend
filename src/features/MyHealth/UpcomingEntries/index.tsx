import { gql } from '@apollo/client';
import { UpcomingEntriesType } from '../types/appointment.types';
import EmptyWindow from './EpmtyWindow';
import ListCards from './ListCards';



// const upcomingEntriesData: UpcomingEntriesType[] = [
//   {
//     id: '1',
//     dateAppointment: '2025-04-02 16:45:32',
//     name: 'Лаботомия',
//     doctor: 'Невролог И.И.',
//     price: '250 000',
//     priceCurrency: 'UZS',
//     duration: '40 минут',
//   },
//   {
//     id: '2',
//     dateAppointment: '2025-04-02 16:45:32',
//     name: 'Лаботомия',
//     doctor: 'Невролог И.И.',
//     price: '250 000',
//     priceCurrency: 'UZS',
//     duration: '40 минут',
//   },
//   {
//     id: '3',
//     dateAppointment: '2025-04-02 16:45:32',
//     name: 'Лаботомия',
//     doctor: 'Невролог И.И.',
//     price: '250 000',
//     priceCurrency: 'UZS',
//     duration: '40 минут',
//   },
// ];

interface IUpcomingEntriesProps {
  upcomingEntriesData: UpcomingEntriesType[];
}



export default async function UpcomingEntries({upcomingEntriesData}: IUpcomingEntriesProps) {

  return (
    <div className="overflow-y-auto flex flex-col min-w-[294px]">
      {upcomingEntriesData?.length ? (
        <ListCards entries={upcomingEntriesData} />
      ) : (
        <EmptyWindow />
      )}
    </div>
  );
}
