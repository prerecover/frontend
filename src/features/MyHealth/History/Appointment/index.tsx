import { IAppointment } from '../../types/appointment.types';
import CardAppointment from './CardAppointment';

const appointmentData: IAppointment[] = [
  {
    id: '1',
    name: 'Восстановление',
    status: 'Отменено',
    format: 'online',
    clinic: 'Хеликс',
    doctor: 'Невролог И.И.',
    address: 'г. Гомель ул. Владимирова д. 100',
    price: '250 000',
    priceCurrency: 'UZS',
    paymentAmount: '0',
    duration: '40 минут',
    dateAppointment: '2025-04-02 16:45:32',
  },
  {
    id: '2',
    name: 'Восстановление',
    status: 'Отменено',
    format: 'offline',
    clinic: 'Хеликс',
    doctor: 'Невролог И.И.',
    address: 'г. Гомель ул. Владимирова д. 100',
    price: '250 000',
    priceCurrency: 'UZS',
    paymentAmount: '0',
    duration: '40 минут',
    dateAppointment: '2025-04-02 16:45:32',
  },
  {
    id: '3',
    name: 'Восстановление',
    status: 'Отменено',
    format: 'online',
    clinic: 'Хеликс',
    doctor: 'Невролог И.И.',
    address: 'г. Гомель ул. Владимирова д. 100',
    price: '250 000',
    priceCurrency: 'UZS',
    paymentAmount: '0',
    duration: '40 минут',
    dateAppointment: '2025-04-02 16:45:32',
  },
  {
    id: '4',
    name: 'Восстановление',
    status: 'Отменено',
    format: 'online',
    clinic: 'Хеликс',
    doctor: 'Невролог И.И.',
    address: 'г. Гомель ул. Владимирова д. 100',
    price: '250 000',
    priceCurrency: 'UZS',
    paymentAmount: '0',
    duration: '40 минут',
    dateAppointment: '2025-04-02 16:45:32',
  },
  {
    id: '5',
    name: 'Восстановление',
    status: 'Отменено',
    format: 'online',
    clinic: 'Хеликс',
    doctor: 'Невролог И.И.',
    address: 'г. Гомель ул. Владимирова д. 100',
    price: '250 000',
    priceCurrency: 'UZS',
    paymentAmount: '0',
    duration: '40 минут',
    dateAppointment: '2025-04-02 16:45:32',
  },
  {
    id: '6',
    name: 'Восстановление',
    status: 'Отменено',
    format: 'online',
    clinic: 'Хеликс',
    doctor: 'Невролог И.И.',
    address: 'г. Гомель ул. Владимирова д. 100',
    price: '250 000',
    priceCurrency: 'UZS',
    paymentAmount: '0',
    duration: '40 минут',
    dateAppointment: '2025-04-02 16:45:32',
  },
];

export default function Appointment() {
  return (
    <div className="grid grid-cols-2 gap-4 min-h-0 h-full max-sm:grid-cols-1 max-sm:gap-2">
      {appointmentData &&
        appointmentData.map((item) => <CardAppointment appointment={item} />)}
    </div>
  );
}
