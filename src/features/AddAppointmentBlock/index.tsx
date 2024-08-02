'use client';

import { FilterBox } from '@/components/ui/filter-box';
import { Text } from '@/components/ui/text';
import ClinicAddAppmntCard from '@/entities/Clinic/ClinicAddAppmntCard';
import ServiceAddAppmntCard from '@/entities/Service/ServiceAddAppmntCard';
import { useCurrServiceStore } from '@/shared/store/currServiceStore';
import { useState } from 'react';
import SelectDoctor from './select-doctor';

export default function AddAppointmentBlock() {
    const { service } = useCurrServiceStore();
    const filters = ['Онлайн', 'Оффлайн'];
    const [filter, setFilter] = useState<string>('Онлайн');
    const [doctorId, setDoctorId] = useState<string>('');

    return (
        <div className='flex flex-col gap-3 p-4'>
            <Text type='h2' className='text-[14px] font-semibold'>
                Клиника
            </Text>
            {service?.clinic && <ClinicAddAppmntCard clinic={service?.clinic} />}
            <Text type='h2' className='text-[14px] font-semibold'>
                Услуга
            </Text>
            {service && <ServiceAddAppmntCard service={service} />}
            <Text type='h2' className='text-[14px] font-semibold'>
                Укажите тип записи
            </Text>
            <FilterBox
                data={filters}
                isSelect={filter}
                setIsSelect={setFilter}
                className='border-[1px] border-blue-200'
            />
            <Text type='h2' className='text-[14px] font-semibold'>
                Выберите врача
            </Text>
            {service?.doctors && (
                <SelectDoctor doctors={service?.doctors} currentDoctor={doctorId} setCurrentDoctor={setDoctorId} />
            )}
        </div>
    );
}
