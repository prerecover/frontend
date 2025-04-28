import {
  Table,
  TableCaption,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from '@/components/ui/table';
import { Text } from '@/components/ui/text';
import { IAppointment } from '@/shared/types/appointment.interface';
import {
  formatDate,
  formatRelativeDate,
  parseWeekDay,
} from '@/shared/utils/formatDate';
import Image from 'next/image';

export default function AppointmentsTable({
  appointments,
  status,
}: {
  appointments: IAppointment[];
  status: 'In process' | 'Rejected' | 'Approoved' | 'Pending';
}) {
  return (
    <Table className="overflow-x-scroll w-screen">
      <TableCaption>Список всех записей</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px] text-[#606368]">No</TableHead>
          <TableHead>Дата создания</TableHead>
          <TableHead>Название услуги</TableHead>
          <TableHead>Дата и время записи</TableHead>
          <TableHead>Клиника</TableHead>
          <TableHead>Телефон</TableHead>
          <TableHead>Врач</TableHead>
          <TableHead>Город</TableHead>
          <TableHead>Адрес</TableHead>
          <TableHead>Пациент</TableHead>
          <TableHead>Телефон</TableHead>
          <TableHead>Город</TableHead>
          <TableHead>Адрес</TableHead>
          <TableHead>Статус</TableHead>
          <TableHead>СМС</TableHead>
          <TableHead>Напоминание</TableHead>
          <TableHead>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/*appointments
          .filter((appointment) =>
            status ? appointment.status == status : appointment
          )
          .map((appointment, i) => (
            <TableRow key={i} className="text-center">
              <TableCell className="w-[40px]">{i + 1}</TableCell>
              <TableCell className="min-w-[180px] bg-white p-10">
                {appointment.service.title}
              </TableCell>
              <TableCell className="min-w-[180px] ">
                {formatDate(new Date(appointment.timeStart))}
              </TableCell>
              <TableCell className="min-w-[180px] bg-white ">
                {appointment.clinic.title}
              </TableCell>
              <TableCell className="min-w-[180px] ">
                {appointment.clinic.detail.numbers[0]}
              </TableCell>
              <TableCell className="min-w-[180px] bg-white">
                {appointment.doctor.lastName} {appointment.doctor.firstName}{' '}
                {appointment.doctor.surname}
              </TableCell>
              <TableCell className="min-w-[180px] ">
                {appointment.clinic.city}
              </TableCell>
              <TableCell className="min-w-[180px] bg-white">
                ID {appointment.user.userId}
              </TableCell>
              <TableCell className="min-w-[180px] ">
                {appointment.user.number}
              </TableCell>
              <TableCell className="min-w-[180px] bg-white">
                {appointment.user.city}
              </TableCell>
              <TableCell className="min-w-[180px] ">
                {appointment.user.address}
              </TableCell>
              <TableCell className="min-w-[180px] ">
                {appointment.status}
              </TableCell>
              <TableCell className="min-w-[180px] ">-</TableCell>
              <TableCell className="min-w-[180px] ">-</TableCell>
              <TableCell className="min-w-[180px] ">Выбрать</TableCell>
            </TableRow>
          ))*/}
        <TableRow className="text-center">
          <TableCell className="w-[40px]">1</TableCell>
          <TableCell className="min-w-[180px] bg-white p-10">1</TableCell>
          <TableCell className="min-w-[180px] ">1</TableCell>
          <TableCell className="min-w-[180px] bg-white ">1</TableCell>
          <TableCell className="min-w-[180px] ">1</TableCell>
          <TableCell className="min-w-[180px] bg-white">1</TableCell>
          <TableCell className="min-w-[180px] ">1</TableCell>
          <TableCell className="min-w-[180px] bg-white">ID 2</TableCell>
          <TableCell className="min-w-[180px] ">1</TableCell>
          <TableCell className="min-w-[180px] bg-white">1</TableCell>
          <TableCell className="min-w-[180px] ">1</TableCell>
          <TableCell className="min-w-[180px] ">1</TableCell>
          <TableCell className="min-w-[180px] ">-</TableCell>
          <TableCell className="min-w-[180px] ">-</TableCell>
          <TableCell className="min-w-[180px] ">Выбрать</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
