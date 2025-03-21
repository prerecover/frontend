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
import BlueBox from '@/components/ui/blue-box'
import { FaPlus } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
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
import AppointmentsTable from './tables/AppointmentTable';

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
  const handleValue = (
    key: 'appointment' | 'clinic' | 'sms',
    value: string
  ) => {
    switch (key) {
      case 'clinic':
        setClinicValue(value);
        setAppointmentValue('');
        setSmsValue('');
        break;
      case 'appointment':
        setClinicValue('');
        setAppointmentValue(value);
        setSmsValue('');
        break;
      default:
        setClinicValue('');
        setAppointmentValue('');
        setSmsValue(value);
        break;
    }
  };

  return (
    <div className="flex flex-col overflow-x-scroll">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3 w-1/3">
          <Select
            onValueChange={(e) => handleValue('clinic', e)}
            value={clinicValue}
          >
            <SelectTrigger className="max-w-[340px] py-7 pr-5 pl-6 border-[1px]  border-blue border-solid bg-[#fff] rounded-[12px] text-blue">
              {!clinicValue && (
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
            onValueChange={(e) => handleValue('appointment', e)}
            value={appointmentValue}
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
              <SelectItem value={'Pending'} className="cursor-pointer">
                Запросы{' '}
                {
                  appointments.filter(
                    (appointment) => appointment.status == 'Pending'
                  ).length
                }
              </SelectItem>
              <SelectItem value={'В процессе'} className="cursor-pointer">
                В процессе{' '}
                {
                  appointments.filter(
                    (appointment) => appointment.status == 'In process'
                  ).length
                }
              </SelectItem>
              <SelectItem value={'Состоявшиеся'} className="cursor-pointer">
                Состоявшиеся{' '}
                {
                  appointments.filter(
                    (appointment) => appointment.status == 'Approoved'
                  ).length
                }
              </SelectItem>
              <SelectItem value={'Отменено'} className="cursor-pointer">
                Отменено{' '}
                {
                  appointments.filter(
                    (appointment) => appointment.status == 'Pending'
                  ).length
                }
              </SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(e) => handleValue('sms', e)} value={smsValue}>
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
        
        <div className='flex gap-3 w-1/2'>
          <BlueBox className="flex items-center gap-3 text-blue hover:bg-blue/10 cursor-pointer">
            <span>Добавить</span>
            <FaPlus />
          </BlueBox>
          <SearchInput
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <BlueBox className="flex items-center gap-3 text-blue hover:bg-blue/10 cursor-pointer">
            <CiLogout />
          </BlueBox>
        </div>
      </div>
      {clinicValue ? (
        <ClinicTable clinics={clinics} />
      ) : appointmentValue ? (
        <AppointmentsTable appointments={appointments} status='Pending' />
      ) : (
        <></>
      )}
    </div>
  );
}
