'use client';
import { useState } from 'react';
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
import { FaPlus } from 'react-icons/fa6';
import Image from 'next/image';

export default function ClinicTable() {
  const [visibleAction, setVisibleAction] = useState(false);
  const [visibleList, setVisibleList] = useState(false);

  return (
    <Table className="overflow-x-scroll w-screen">
      <TableCaption className="mt-40">Список всех клиник</TableCaption>

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
          <TableHead>Всего врачей</TableHead>
          <TableHead>Сеть клиник</TableHead>
          <TableHead>Действия</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/*clinics.map((clinic, i) => (
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
        ))*/}
        <TableRow className="text-center">
          <TableCell className="w-[40px]">1</TableCell>
          <TableCell className="min-w-[180px] bg-white p-10">Хелликс</TableCell>
          <TableCell className="min-w-[180px] ">Клиника</TableCell>
          <TableCell className="min-w-[180px] bg-white ">
            Август 2012 г.
          </TableCell>
          <TableCell className="min-w-[180px] ">36 м²</TableCell>
          <TableCell className="min-w-[180px] bg-white">
            + 7 (999) 03-20-911
          </TableCell>
          <TableCell className="min-w-[180px] ">+ 7 (999) 03-20-911</TableCell>
          <TableCell className="min-w-[180px] bg-white">Палестина</TableCell>
          <TableCell className="min-w-[180px] ">Абу-Даби</TableCell>
          <TableCell className="min-w-[180px] bg-white">ул: Чурки 12</TableCell>
          <TableCell className="min-w-[180px] ">12</TableCell>
          <TableCell className="min-w-[180px] bg-white">
            <Image
              src={'/assets/close-circle.svg'}
              width={24}
              height={24}
              alt={'out'}
              className="m-auto"
            />
          </TableCell>
          <TableCell className="min-w-[180px] ">
            <Image
              src={'/assets/tick-circle.svg'}
              width={24}
              height={24}
              alt={'out'}
              className="m-auto"
            />
          </TableCell>

          <TableCell className="min-w-[180px] bg-white">
            <div className="flex-between ">
              <Text className="font-semibold">пн</Text>
              8:00 -17:00
            </div>
            <div className="flex-between ">
              <Text className="font-semibold">сб-вс</Text>
              8:00 -14:00
            </div>
          </TableCell>
          <TableCell className="min-w-[180px] ">3</TableCell>
          <TableCell className="min-w-[180px] bg-white">24</TableCell>
          <TableCell className="min-w-[180px] ">
            <span className="text-blue cursor-pointer">Загрузить</span>
          </TableCell>
          <TableCell className="min-w-[180px] bg-white">
            Английский Русский
          </TableCell>
          <TableCell className="min-w-[180px] ">
            <Image
              src={'/assets/close-circle.svg'}
              width={24}
              height={24}
              alt={'out'}
              className="m-auto"
            />
          </TableCell>
          <TableCell className="min-w-[180px] bg-white">
            <span className="text-blue cursor-pointer">5</span> / 130
          </TableCell>
          <TableCell className="min-w-[180px] ">
            <span className="text-blue cursor-pointer">12</span> / 130
          </TableCell>
          <TableCell className="min-w-[180px] bg-white relative">
            <span
              onClick={() => setVisibleList(!visibleList)}
              className="text-blue cursor-pointer"
            >
              3
            </span>
            {visibleList && (
              <div className="w-[280px] absolute bottom-0 right-0 flex flex-col items-start bg-white shadow-md rounded-xl translate-y-full">
                <button className="text-blue hover:text-sky font-semibold flex items-center justify-center gap-x-2 w-full p-4">
                  <span>Добавить</span>
                  <FaPlus />
                </button>
                <div className="cursor-pointer p-4 hover:bg-white-background w-full text-left">
                  <h4 className="font-semibold">Клиника Хелликс</h4>
                  <p>Абу-Даби, ул: Чурки 12</p>
                </div>
                <div className="cursor-pointer p-4 hover:bg-white-background w-full text-left">
                  <h4 className="font-semibold">Клиника Хелликс</h4>
                  <p>Абу-Даби, ул: Чурки 12</p>
                </div>
              </div>
            )}
          </TableCell>
          <TableCell className="min-w-[180px] relative">
            <span
              onClick={() => setVisibleAction(!visibleAction)}
              className="text-blue cursor-pointer"
            >
              Выбрать
            </span>
            {visibleAction && (
              <div className="w-[180px] absolute bottom-0 right-0 flex flex-col items-start bg-white shadow-md rounded-xl translate-y-full">
                <span className="cursor-pointer p-4 hover:bg-white-background w-full text-left">
                  Изменить
                </span>
                <span className="cursor-pointer p-4 hover:bg-white-background w-full text-left">
                  Удалить
                </span>
              </div>
            )}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
