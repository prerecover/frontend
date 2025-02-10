import DoctorSearchCard from '@/entities/Doctor/DoctorSearchCard';
import { SearchDataWrapper } from '@/components/searchDataWrapper';
import ClinicSearchCard from '@/entities/Clinic/ClinicSearchCard';
import ServiceSearchCard from '@/entities/Service/ServiceSearchCard';
import { ISearch } from '../SearchBlock';
import { IDoctor } from '@/shared/types/doctor.interface';
import { IClinic } from '@/shared/types/clinic.interface';
import { IService } from '@/shared/types/service.interface';

export default function AdminSearchList({
  filter,
  search,
  data,
}: {
  filter: string;
  search: string;
  data: ISearch;
}) {
  return (
    <>
      {filter == 'doctors' ? (
        <SearchDataWrapper
          listIsUndefined={data === undefined}
          listLength={data.doctors.length || 0}
        >
          <div className="gap-[10px] w-full flex flex-col">
            {data.doctors
              .filter((doctor: IDoctor) =>
                Object.values(doctor).some((value) => {
                  if (typeof value === 'string') {
                    return value.toLowerCase().includes(search.toLowerCase());
                  }
                })
              )
              .map((doctor: IDoctor) => (
                <DoctorSearchCard doctor={doctor} key={doctor._id} />
              ))}
          </div>
        </SearchDataWrapper>
      ) : filter == 'clinics' ? (
        <SearchDataWrapper
          listIsUndefined={data === undefined}
          listLength={data.clinics.length || 0}
        >
          <div className="w-full flex flex-col gap-[10px]">
            {data.clinics
              .filter((clinic: IClinic) =>
                Object.values(clinic).some((value) => {
                  if (typeof value === 'string') {
                    return value.toLowerCase().includes(search.toLowerCase());
                  }
                })
              )
              .map((clinic: IClinic) => (
                <ClinicSearchCard clinic={clinic} key={clinic._id} />
              ))}
          </div>
        </SearchDataWrapper>
      ) : (
        <>
          <SearchDataWrapper
            listIsUndefined={data === undefined}
            listLength={data.services.length || 0}
          >
            <div className="w-full flex flex-col gap-[10px]">
              {data.services
                .filter((service: IService) =>
                  Object.values(service).some((value) => {
                    if (typeof value === 'string') {
                      return value.toLowerCase().includes(search.toLowerCase());
                    }
                  })
                )
                .map((service: IService) => (
                  <ServiceSearchCard service={service} key={service._id} />
                ))}
            </div>
          </SearchDataWrapper>
        </>
      )}
    </>
  );
}
