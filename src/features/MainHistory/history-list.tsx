import DoctorSearchCard from '@/entities/Doctor/DoctorSearchCard';
import { History } from '.';
import { SearchDataWrapper } from '@/components/searchDataWrapper';
import ClinicSearchCard from '@/entities/Clinic/ClinicSearchCard';
import AppointmentHistoryCard from '@/entities/Appointment/AppointmentHistroryCard';

export default function HistoryList({ filter, search, data }: { filter: string; search: string; data: History }) {
    return (
        <>
            {filter == 'doctors' ? (
                <SearchDataWrapper listIsUndefined={data === undefined} listLength={data.doctors.length || 0}>
                    <div className='grid grid-cols-1 gap-[10px] desktop:grid-cols-3 '>
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
                    <div className='grid grid-cols-1 gap-[10px] desktop:grid-cols-3 pc:grid-cols-4'>
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
            ) : filter == 'appointments' ? (
                <>
                    <SearchDataWrapper listIsUndefined={data === undefined} listLength={data.appointments.length || 0}>
                        <div className='grid grid-cols-1 gap-[10px] desktop:grid-cols-3 pc:grid-cols-4'>
                            {data.appointments
                                .filter((appointment) => appointment.timeStart < new Date().getTime())
                                .filter((appointment) =>
                                    Object.values(appointment).some((value) => {
                                        if (typeof value === 'string') {
                                            return value.toLowerCase().includes(search.toLowerCase());
                                        }
                                    }),
                                )
                                .map((appointment) => (
                                    <AppointmentHistoryCard appointment={appointment} key={appointment._id} />
                                ))}
                        </div>
                    </SearchDataWrapper>
                </>
            ) : (
                <></>
            )}
        </>
    );
}
