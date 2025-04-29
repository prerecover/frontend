import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Image from 'next/image';
import { useState } from 'react';
import FullCard from './FullCard';
import { UpcomingEntriesType } from '../types/appointment.types';
import { formattedDate } from '@/shared/utils/formattedDate';

interface IListCardsProps {
  entries: UpcomingEntriesType[];
}

export default function ListCards({
  entries: initialEntries,
}: IListCardsProps) {
  const [entries, setEntries] = useState(
    initialEntries.map((entry) => ({
      ...entry,
      isVisible: false,
    }))
  );


  const toggleCard = (id: string) => {
    setEntries((prevEntries) =>
      prevEntries.map((item) =>
        item.id === id ? { ...item, isVisible: !item.isVisible } : item
      )
    );
  };

  return (
    <div className="space-y-3">
      {entries.map((item) => {
        const { date, time } = formattedDate(item.dateAppointment);
        return (
          <div key={item.id}>
            <div
              onClick={() => toggleCard(item.id)}
              className="w-full bg-[#0064FA] flex items-center 
                                justify-between font-medium text-lg rounded-md mb-3
                                py-2 px-4 text-white cursor-pointer"
            >
              <p>
                Запись {date} в {time}
              </p>
              <Image
                src={
                  item.isVisible
                    ? '/assets/white-arrow-up.svg'
                    : '/assets/white-arrow-down.svg'
                }
                alt="arrow"
                width={24}
                height={24}
              />
            </div>
            {item.isVisible && (
              <FullCard
                appointment={item}
                onClose={() => toggleCard(item.id)}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
