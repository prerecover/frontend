'use client';

import { FilterBox } from '@/components/ui/filter-box';
import { Text } from '@/components/ui/text';
import ClinicAddAppmntCard from '@/entities/Clinic/ClinicAddAppmntCard';
import ServiceAddAppmntCard from '@/entities/Service/ServiceAddAppmntCard';
import { useCurrServiceStore } from '@/shared/store/currServiceStore';
import { useEffect, useState } from 'react';
import SelectDoctor from './select-doctor';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { gql, useMutation } from '@apollo/client';
import { getCookie } from '@/shared/lib/hooks/useCookie';
import { useToast } from '@/components/ui/use-toast';
import { formatDate } from '@/shared/utils/formatDate';
import AppointmentPopupDesktop from './desktop-popup';
import CalendarBlock from './calendar-block';
import { IDoctor } from '@/shared/types/doctor.interface';

const CREATE_APPOINTMENT = gql(`
mutation CreateAppointment ($clinicId: String!, $doctorId: String!, $online: Boolean, $serviceId: String!, $timeStart: Date!){
    createAppointment(
        createAppointmentInput: {
            clinicId: $clinicId,
            doctorId: $doctorId,
            online: $online, 
            serviceId: $serviceId,
            timeStart: $timeStart
        }
    ) {
        _id
        createdAt
        file
        notify
        online
        specialCheck
        status
        timeStart
        title
        doctor{
            firstName   
            lastName 
            surname
        }   
        updatedAt
    }
}
`);

export default function AddAppointmentBlock() {
  const { service } = useCurrServiceStore();
  const filters = ['Онлайн', 'Оффлайн'];
  const router = useRouter();
  const [filter, setFilter] = useState<string>('Онлайн');
  const [token, setToken] = useState<string | undefined>();
  const [doctorId, setDoctorId] = useState<string>('empty');
  const { toast } = useToast();
  const [date, setDate] = useState<Date>(new Date());
  const [time, setTime] = useState<string>('10:30');
  const [mutate] = useMutation(CREATE_APPOINTMENT, {
    context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
    onError(error) {
      toast({ title: error.message, variant: 'destructive' });
    },
    onCompleted(data) {
      const doctor = data.createAppointment.doctor;
      router.replace('/appointments');
      toast({
        variant: 'warning',
        title: 'Ваша запись добавлена на рассмотрение',
        description: `Дата: ${formatDate(date)}. Врач: ${doctor?.lastName} ${doctor?.firstName?.charAt(0) + '.'} ${doctor?.surname?.charAt(0) + '.'}`,
      });
    },
  });

  useEffect(() => {
    setToken(getCookie('access_token'));
    if (!service) {
      router.back();
    }
  }, [router, service, date]);

  const parseTime = (time: string) => {
    const hours = parseInt(time.slice(0, 2));
    const minutes = parseInt(time.slice(3, 5));
    return { hours, minutes };
  };

  const handleAppointment = () => {
    const { hours, minutes } = parseTime(time);
    date.setHours(hours, minutes);

    console.log(service?.doctors![0]._id);
    doctorId == 'empty' &&
      setDoctorId((service?.doctors && service?.doctors[0]._id) || '');
    mutate({
      variables: {
        clinicId: service?.clinic?._id,
        doctorId: doctorId == 'empty' ? service?.doctors![0]?._id : doctorId,
        online: filter == 'Онлайн',
        serviceId: service?._id,
        timeStart: date.getTime(),
      },
    });
  };
  return (
    <div>
      <motion.div className="flex mobile:hidden w-full max-w-[1036px] h-full bg-white rounded-[10px] mx-auto mt-36">
        {service && (
          <AppointmentPopupDesktop
            currDoctorId={doctorId}
            setCurrDoctorId={setDoctorId}
            filters={filters}
            setFilter={setFilter}
            filter={filter}
            service={service}
          />
        )}
        <div className="w-[1px] h-screen max-h-[750px] bg-blue-200 mt-[40px] mx-auto z-50"></div>
        <div className="flex flex-col py-[30px]  gap-3 mx-auto">
          <CalendarBlock
            handleAppointment={handleAppointment}
            setTime={setTime}
            time={time}
            setDate={setDate}
          />
        </div>
      </motion.div>
      <div className="flex flex-col gap-3 p-4 desktop:hidden transition-all">
        <Text type="h2" className="text-[14px] font-semibold">
          Клиника
        </Text>
        {service?.clinic && <ClinicAddAppmntCard clinic={service?.clinic} />}
        <Text type="h2" className="text-[14px] font-semibold">
          Услуга
        </Text>
        {service && <ServiceAddAppmntCard service={service} />}
        <Text type="h2" className="text-[14px] font-semibold">
          Укажите тип записи
        </Text>
        <FilterBox
          data={filters}
          isSelect={filter}
          setIsSelect={setFilter}
          className="border-[1px] border-blue-200"
        />
        {service?.doctors && service?.doctors?.length > 1 && (
          <>
            <Text type="h2" className="text-[14px] font-semibold">
              Выберите врача
            </Text>
          </>
        )}
        {service?.doctors && (
          <SelectDoctor
            doctors={service?.doctors as IDoctor[]}
            currentDoctor={doctorId}
            setCurrentDoctor={setDoctorId}
          />
        )}
        <CalendarBlock
          handleAppointment={handleAppointment}
          setTime={setTime}
          time={time}
          setDate={setDate}
        />
      </div>
    </div>
  );
}
