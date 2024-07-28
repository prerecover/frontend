import DoctorSearchCard from '@/entities/Doctor/DoctorSearchCard';
import { Search } from '.';
import { SearchDataWrapper } from '@/components/searchDataWrapper';
import ClinicSearchCard from '@/entities/Clinic/ClinicSearchCard';
import ServiceSearchCard from '@/entities/Service/ServiceSearchCard';

export default function SearchList({ filter, search, data }: { filter: string; search: string; data: Search }) {
    return (
        <>
            {filter == 'doctors' ? (
                <SearchDataWrapper listIsUndefined={data === undefined} listLength={data.doctors.length || 0}>
                    <div className='grid grid-cols-1 gap-[10px] desktop:grid-cols-3'>
                        {data.doctors
                            .filter((doctor) =>
                                Object.values(doctor).some((value) => {
                                    if (typeof value === 'string') {
                                        return value.toLowerCase().includes(search.toLowerCase());
                                    }
                                }),
                            )
                            .map((doctor) => (
                                <DoctorSearchCard doctor={doctor} key={doctor._id} />
                            ))}
                    </div>
                </SearchDataWrapper>
            ) : filter == 'clinics' ? (
                <SearchDataWrapper listIsUndefined={data === undefined} listLength={data.clinics.length || 0}>
                    <div className='grid grid-cols-1 gap-[10px] desktop:grid-cols-3'>
                        {data.clinics
                            .filter((clinic) =>
                                Object.values(clinic).some((value) => {
                                    if (typeof value === 'string') {
                                        return value.toLowerCase().includes(search.toLowerCase());
                                    }
                                }),
                            )
                            .map((clinic) => (
                                <ClinicSearchCard clinic={clinic} key={clinic._id} />
                            ))}
                    </div>
                </SearchDataWrapper>
            ) : (
                <>
                    <SearchDataWrapper listIsUndefined={data === undefined} listLength={data.services.length || 0}>
                        <div className='grid grid-cols-1 gap-[10px] desktop:grid-cols-3'>
                            {data.services
                                .filter((service) =>
                                    Object.values(service).some((value) => {
                                        if (typeof value === 'string') {
                                            return value.toLowerCase().includes(search.toLowerCase());
                                        }
                                    }),
                                )
                                .map((service) => (
                                    <ServiceSearchCard service={service} key={service._id} />
                                ))}
                        </div>
                    </SearchDataWrapper>
                </>
            )}
        </>
    );
}
