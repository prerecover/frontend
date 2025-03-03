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
import { IClinic } from '@/shared/types/clinic.interface';
import {
  formatDate,
  formatRelativeDate,
  parseWeekDay,
} from '@/shared/utils/formatDate';
import Image from 'next/image';

export default function ClinicTable({ clinics }: { clinics: IClinic[] }) {
  return (
    <Table className="overflow-x-scroll w-screen">
      <TableCaption>Список всех клиник</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[40px] text-[#606368]">No</TableHead>
          <TableHead>Название</TableHead>
          <TableHead>Тип учреждения</TableHead>
          <TableHead>Начало работы</TableHead>
          <TableHead>Площадь</TableHead>
          <TableHead>Телефон</TableHead>
          <TableHead>Телефон для отправки отчета в тг</TableHead>
          <TableHead>Страна</TableHead>
          <TableHead>Город</TableHead>
          <TableHead>Адрес</TableHead>
          <TableHead>Количество этажей</TableHead>
          <TableHead>Компьютер</TableHead>
          <TableHead>Интернет</TableHead>
          <TableHead>Дни и время работы</TableHead>
          <TableHead>Категории</TableHead>
          <TableHead>Всего медиафайлов</TableHead>
          <TableHead>Фото</TableHead>
          <TableHead>Языки</TableHead>
          <TableHead>Лифт</TableHead>
          <TableHead>Всего услуг</TableHead>
          <TableHead>Услуги (доступные к созданию)</TableHead>
          <TableHead>Всего врачей</TableHead>
          <TableHead>Врачи (доступные к созданию)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {clinics.map((clinic, i) => (
          <TableRow key={i} className="text-center">
            <TableCell className="w-[40px]">{i + 1}</TableCell>
            <TableCell className="min-w-[180px] bg-white p-10">
              {clinic.title}
            </TableCell>
            <TableCell className="min-w-[180px] ">{clinic.typeTitle}</TableCell>
            <TableCell className="min-w-[180px] bg-white ">
              {formatDate(new Date(clinic.createdAt))}
            </TableCell>
            <TableCell className="min-w-[180px] ">
              {clinic.detail.square} м²
            </TableCell>
            <TableCell className="min-w-[180px] bg-white">
              {clinic.detail.numbers[0]}
            </TableCell>
            <TableCell className="min-w-[180px] ">
              {clinic.detail.numbers[0]}
            </TableCell>
            <TableCell className="min-w-[180px] bg-white">
              {clinic.country.title}
            </TableCell>
            <TableCell className="min-w-[180px] ">{clinic.city}</TableCell>
            <TableCell className="min-w-[180px] bg-white">
              {clinic.address}
            </TableCell>
            <TableCell className="min-w-[180px] ">
              {clinic.detail.numberOfFloors}
            </TableCell>
            <TableCell className="min-w-[180px] bg-white">
              <Image
                src={
                  clinic.detail.computerHave
                    ? '/assets/tick-circle.svg'
                    : '/assets/close-circle.svg'
                }
                width={24}
                height={24}
                alt={clinic.detail.computerHave ? 'have' : 'out'}
                className="m-auto"
              />
            </TableCell>
            <TableCell className="min-w-[180px] ">
              <Image
                src={
                  clinic.detail.internetHave
                    ? '/assets/tick-circle.svg'
                    : '/assets/close-circle.svg'
                }
                width={24}
                height={24}
                alt={clinic.detail.internetHave ? 'have' : 'out'}
                className="m-auto"
              />
            </TableCell>

            <TableCell className="flex flex-col w-[180px] bg-white">
              <div className="flex-between ">
                <Text className="font-semibold">пн</Text>
                {parseWeekDay(clinic.detail.mondayTime)}
              </div>
              <div className="flex-between ">
                <Text className="font-semibold">вт</Text>
                {parseWeekDay(clinic.detail.tuesdayTime)}
              </div>
              <div className="flex-between ">
                <Text className="font-semibold">ср</Text>
                {parseWeekDay(clinic.detail.wednesdayTime)}
              </div>
              <div className="flex-between ">
                <Text className="font-semibold">чт</Text>
                {parseWeekDay(clinic.detail.thursdayTime)}
              </div>
              <div className="flex-between ">
                <Text className="font-semibold">пт</Text>
                {parseWeekDay(clinic.detail.fridayTime)}
              </div>
              <div className="flex-between ">
                <Text className="font-semibold">сб</Text>
                {parseWeekDay(clinic.detail.saturdayTime)}
              </div>
              <div className="flex-between ">
                <Text className="font-semibold">вс</Text>
                {parseWeekDay(clinic.detail.sundayTime)}
              </div>
            </TableCell>
            <TableCell className="min-w-[180px] ">15 из 30</TableCell>
            <TableCell className="min-w-[180px] bg-white">24</TableCell>
            <TableCell className="min-w-[180px] ">хз что тут писать</TableCell>
            <TableCell className="min-w-[180px] bg-white">
              хз что тут писать
            </TableCell>
            <TableCell className="min-w-[180px] ">
              <Image
                src={
                  clinic.detail.elevatorHave
                    ? '/assets/tick-circle.svg'
                    : '/assets/close-circle.svg'
                }
                width={24}
                height={24}
                alt={clinic.detail.elevatorHave ? 'have' : 'out'}
                className="m-auto"
              />
            </TableCell>
            <TableCell className="min-w-[180px] bg-white">
              {clinic.detail.totalServices}
            </TableCell>
            <TableCell className="min-w-[180px] ">
              {clinic.detail.totalServices - 1}
            </TableCell>
            <TableCell className="min-w-[180px] bg-white">
              {clinic.detail.totalDoctors}
            </TableCell>
            <TableCell className="min-w-[180px] ">
              {clinic.detail.totalDoctors - 1}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
