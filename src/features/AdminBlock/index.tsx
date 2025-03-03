'use client';
import { IClinic } from '@/shared/types/clinic.interface';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { formatDate, parseWeekDay } from '@/shared/utils/formatDate';
import { SearchInput } from '@/components/ui/search-input';
import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Text } from '@/components/ui/text';
import { ICountry } from '@/shared/types/country.interface';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Link from 'next/link';
import Image from 'next/image';
import { AppointmentIcon } from '@/icons/AppointmentIcon';
import ClinicTable from './tables/ClinicTable';
import { IAppointment } from '@/shared/types/appointment.interface';

export default function AdminBlock({
  clinics,
  countries,
  appointments,
}: {
  clinics: IClinic[];
  countries: ICountry[];
  appointments: IAppointment[];
}) {
  const [search, setSearch] = useState('');
  const [clinicValue, setClinicValue] = useState('Все');

  const [appointmentValue, setAppointmentValue] = useState('');
  const [smsValue, setSmsValue] = useState('');
  const [country, setCountry] = useState('');
  const [weekendWork, setWeekendWork] = useState(true);
  return (
    <div className="flex flex-col overflow-x-scroll">
      <div className="flex-between p-4 gap-40">
        <div className="flex items-center  gap-3 w-full">
          <Select
            onValueChange={(e) => setClinicValue(e)}
            defaultValue={clinicValue}
          >
            <SelectTrigger className="max-w-[340px] py-7 pr-5 pl-6 border-[1px]  border-blue border-solid bg-[#fff] rounded-[12px] text-blue">
              {clinicValue === '' && (
                <div className="flex gap-4">
                  <Image
                    src={'/assets/clinic.svg'}
                    width={24}
                    height={24}
                    alt="clinic"
                  />
                  <Text className="text-blue">Клиники</Text>
                </div>
              )}
              <SelectValue className="text-[20px]" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-[12px] flex flex-col gap-4">
              <SelectItem value={'Все'} className="cursor-pointer">
                Все
              </SelectItem>
              <SelectItem value={'Зарегестрировать'} className="cursor-pointer">
                Зарегестрировать
              </SelectItem>
              <SelectItem value={'Выйти'} className="cursor-pointer">
                Выйти
              </SelectItem>
            </SelectContent>
          </Select>
          <Select
            onValueChange={(e) => setAppointmentValue(e)}
            defaultValue={appointmentValue}
          >
            <SelectTrigger className="max-w-[340px] py-7 pr-5 pl-6 border-[1px]  border-blue border-solid bg-[#fff] rounded-[12px] text-blue">
              {appointmentValue === '' && (
                <div className="flex gap-4">
                  <AppointmentIcon />
                  <Text className="text-blue">Записи</Text>
                </div>
              )}
              <SelectValue className="text-[20px]" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-[12px] flex flex-col gap-4">
              <SelectItem value={'Запросы'} className="cursor-pointer">
                Запросы 12
              </SelectItem>
              <SelectItem value={'В процессе'} className="cursor-pointer">
                В процессе 12
              </SelectItem>
              <SelectItem value={'Состоявшиеся'} className="cursor-pointer">
                Состоявшиеся 12
              </SelectItem>
              <SelectItem value={'Отменено'} className="cursor-pointer">
                Отменено 12
              </SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(e) => setSmsValue(e)} defaultValue={smsValue}>
            <SelectTrigger className="max-w-[340px] py-7 pr-5 pl-6 border-[1px]  border-blue border-solid bg-[#fff] rounded-[12px] text-blue">
              {smsValue === '' && (
                <div className="flex gap-4">
                  <Image
                    src={'/assets/mail.svg'}
                    width={24}
                    height={24}
                    alt="clinic"
                  />
                  <Text className="text-blue">SMS</Text>
                </div>
              )}
              <SelectValue className="text-[20px]" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-[12px] flex flex-col gap-4">
              <SelectItem value={'Отправлено'} className="cursor-pointer">
                Отправлено
              </SelectItem>
              <SelectItem
                value={'Не было отправлено'}
                className="cursor-pointer"
              >
                Не было отправлено
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <SearchInput
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </div>
      {clinicValue ? (
        <ClinicTable clinics={clinics} />
      ) : appointmentValue ? (
        <></>
      ) : (
        <></>
      )}
    </div>
  );
}
