import dayjs from 'dayjs';
import Image from 'next/image';
import { UpcomingEntriesType } from '../types/appointment.types';
import { Button } from '@/components/ui/button';

interface IFullCardProps {
  appointment: UpcomingEntriesType;
  onClose: () => void;
}

export default function FullCard({ appointment, onClose }: IFullCardProps) {
  const { dateAppointment, title, doctor, price, priceCurrency, duration } =
    appointment;
  const dateFormatted = dayjs(dateAppointment, 'YYYY-MM-DD HH:mm:ss', 'ru');
  const date = dateFormatted.format('D MMMM');
  const time = dateFormatted.format('HH:mm');

  return (
    <div className="relative w-full bg-[#0064FA] flex flex-col gap-5 font-medium text-lg rounded-xl text-[#FFFFFFCC] mb-3 py-5 px-6">
      <div className="flex items-center justify-between">
        <p className="text-white">
          Запись {date} в {time}
        </p>
        <div
          className="absolute right-4 top-4 cursor-pointer"
          onClick={onClose}
        >
          <Image
            src="/assets/white-arrow-up.svg"
            alt="arrow-up"
            width={24}
            height={24}
          />
        </div>
      </div>

      <p>
        Название: <span className="text-white">{title}</span>
      </p>
      <p>
        Врач: <span className="text-white">{doctor}</span>
      </p>
      <p>
        Стоимость:{' '}
        <span className="text-white">
          {price} {priceCurrency}
        </span>
      </p>
      <p>
        Длительность: <span className="text-white">{duration}</span>
      </p>
      <Button variant="upcomingEntries">Перейти в запись</Button>
    </div>
  );
}
