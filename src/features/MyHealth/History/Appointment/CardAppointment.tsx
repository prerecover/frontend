import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Image from 'next/image';
import { IAppointment } from '../../types/appointment.types';

interface ICardAppointmentProps {
  appointment: IAppointment;
}

export default function CardAppointment({
  appointment,
}: ICardAppointmentProps) {
  const {
    title,
    status,
    format,
    clinic,
    doctor,
    address,
    price,
    priceCurrency,
    paymentAmount,
    duration,
    dateAppointment,
  } = appointment;
  const dateFormatted = dayjs(dateAppointment, 'DD MMMM HH:mm', 'ru');
  const date = dateFormatted.format('D MMMM');
  const time = dateFormatted.format('HH:mm');

  return (
    <div className="p-5 text-[#262626] font-bold relative border border-[#C8DBF6] rounded-xl max-sm:p-4 max-h-[292px]">
      <p
        className="absolute top-4 right-4 max-sm:text-base"
        style={
          status === 'Отменено' ? { color: '#D64657' } : { color: '00CC5E' }
        }
      >
        {status}
      </p>
      <ul className="flex flex-col text-sm gap-3">
        <li>
          <p className="text-xs text-[#B1B2B4]">Название записи</p>
          <h2 className="font-semibold text-xl">{title}</h2>
        </li>
        <li>
          <p className="text-[#B1B2B4]">
            Формат:{' '}
            <span
              style={
                format === 'online' ? { color: '#00CC5E' } : { color: 'red' }
              }
            >
              {format}
            </span>
          </p>
        </li>
        <li>
          <p className="text-[#B1B2B4]">
            Клиника: <span className="text-[#262626]">{clinic}</span>
          </p>
        </li>
        <li>
          <p className="text-[#B1B2B4]">
            Врач: <span className="text-[#262626]">{doctor}</span>
          </p>
        </li>
        <li>
          <p className="text-[#B1B2B4]">
            Адрес: <span className="text-[#262626]">{address}</span>
          </p>
        </li>
        <li>
          <p className="text-[#B1B2B4]">
            Стоимость:{' '}
            <span className="text-[#262626]">
              {price} {priceCurrency} / {paymentAmount} {priceCurrency}
            </span>
          </p>
        </li>
      </ul>

      <div className="flex justify-between items-center mt-4 max-sm:flex-col max-sm:justify-start max-sm:items-start w-full max-sm:gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/calendar.svg"
            alt="calendar"
            width={20}
            height={20}
          />
          <p className="text-base">{date}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/alarm-clock.svg"
            alt="alarm-clock"
            width={20}
            height={20}
          />
          <p className="text-base">{time}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/assets/clock-fast-forward.svg"
            alt="clock-fast-forward"
            width={20}
            height={20}
          />
          <p className="text-base">{duration}</p>
        </div>
      </div>
    </div>
  );
}
