import { FilterBox } from '@/components/ui/filter-box';
import { Text } from '@/components/ui/text';
import ClinicAddAppmntCard from '@/entities/Clinic/ClinicAddAppmntCard';
import ServiceAddAppmntCard from '@/entities/Service/ServiceAddAppmntCard';
import { IService } from '@/shared/types/service.interface';
import SelectDoctor from './select-doctor';
import { IDoctor } from '@/shared/types/doctor.interface';

export default function AppointmentPopupDesktop({
    service,
    filters,
    filter,
    setFilter,
    currDoctorId,
    setCurrDoctorId,
}: {
    filters: string[];
    service?: IService;
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    currDoctorId: string;
    setCurrDoctorId: React.Dispatch<React.SetStateAction<string>>;
}) {
    return (
        <div className='flex flex-col p-4 transition-all py-[30px] px-[40px] gap-3 min-w-[450px]'>
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
                className='border-[1px] border-blue-200 min-h-[40px]'
            />
            {service?.doctors && service?.doctors?.length > 1 && (
                <>
                    <Text type='h2' className='text-[14px] font-semibold'>
                        Выберите врача
                    </Text>
                </>
            )}
            {service?.doctors && (
                <SelectDoctor
                    doctors={service.doctors as IDoctor[]}
                    currentDoctor={currDoctorId}
                    setCurrentDoctor={setCurrDoctorId}
                />
            )}
        </div>
    );
}
