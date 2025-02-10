import DoctorSearchCard from '@/entities/Doctor/DoctorSearchCard';
import { IFilters, ISearch } from '.';
import { SearchDataWrapper } from '@/components/searchDataWrapper';
import ClinicSearchCard from '@/entities/Clinic/ClinicSearchCard';
import ServiceSearchCard from '@/entities/Service/ServiceSearchCard';
import { IDoctor } from '@/shared/types/doctor.interface';
import { IClinic } from '@/shared/types/clinic.interface';
import { IService } from '@/shared/types/service.interface';
import UndergoingSearchCard from '@/entities/Undergoing/UndergoingSearchCard';
import { IUndergoing } from '@/shared/types/undergoings.interface';

export default function SearchList({
  filter,
  search,
  data,
  filtersState,
}: {
  filtersState: IFilters;
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
          <div className="grid reverse_slider:grid-cols-1 reverse_pc:grid-cols-2 pc:grid-cols-3 gap-[10px] w-full">
            {data.doctors
              .filter((doctor: IDoctor) =>
                Object.values(doctor).some((value) => {
                  if (typeof value === 'string') {
                    return value.toLowerCase().includes(search.toLowerCase());
                  }
                })
              )

              .filter((doctor) => {
                if (filtersState.specializationFilter !== '') {
                  return (
                    doctor.specialization.title ===
                    filtersState.specializationFilter
                  );
                } else {
                  return doctor;
                }
              })
              .filter((doctor) => {
                if (filtersState.cityFilter !== '') {
                  return doctor.city === filtersState.cityFilter;
                } else {
                  return doctor;
                }
              })

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
          <div className="grid reverse_slider:grid-cols-1 reverse_pc:grid-cols-2 pc:grid-cols-3 gap-[10px] w-full">
            {data.clinics
              .filter((clinic: IClinic) =>
                Object.values(clinic).some((value) => {
                  if (typeof value === 'string') {
                    return value.toLowerCase().includes(search.toLowerCase());
                  }
                })
              )
              .filter((clinic) => {
                if (filtersState.cityFilter !== '') {
                  return clinic.city === filtersState.cityFilter;
                } else {
                  return clinic;
                }
              })
              .map((clinic: IClinic) => (
                <ClinicSearchCard clinic={clinic} key={clinic._id} />
              ))}
          </div>
        </SearchDataWrapper>
      ) : filter == 'services' ? (
        <>
          <SearchDataWrapper
            listIsUndefined={data === undefined}
            listLength={data.services.length || 0}
          >
            <div className="grid reverse_slider:grid-cols-1 reverse_pc:grid-cols-2 pc:grid-cols-3 gap-[10px] w-full">
              {data.services
                .filter((service: IService) =>
                  Object.values(service).some((value) => {
                    if (typeof value === 'string') {
                      return value.toLowerCase().includes(search.toLowerCase());
                    }
                  })
                )
                .filter((service) => {
                  if (filtersState.categoryFilter !== '') {
                    return (
                      service.category.title === filtersState.categoryFilter
                    );
                  } else {
                    return service;
                  }
                })
                .filter((service) => {
                  if (filtersState.cityFilter !== '') {
                    return service.clinic.city === filtersState.cityFilter;
                  } else {
                    return service;
                  }
                })
                .map((service: IService) => (
                  <ServiceSearchCard service={service} key={service._id} />
                ))}
            </div>
          </SearchDataWrapper>
        </>
      ) : (
        <>
          <SearchDataWrapper
            listIsUndefined={data === undefined}
            listLength={data.undergoings.length || 0}
          >
            <div className="grid reverse_slider:grid-cols-1 reverse_pc:grid-cols-2 pc:grid-cols-3 gap-[10px] w-full">
              {data.undergoings
                .filter((undergoing: IUndergoing) =>
                  Object.values(undergoing.appointment).some((value) => {
                    if (typeof value === 'string') {
                      return value.toLowerCase().includes(search.toLowerCase());
                    }
                  })
                )
                .filter((undergoing) => {
                  if (filtersState.cityFilter !== '') {
                    return (
                      undergoing.appointment.clinic.city ===
                      filtersState.cityFilter
                    );
                  } else {
                    return undergoing;
                  }
                })
                .map((undergoing: IUndergoing) => (
                  <UndergoingSearchCard
                    undergoing={undergoing}
                    key={undergoing._id}
                  />
                ))}
            </div>
          </SearchDataWrapper>
        </>
      )}
    </>
  );
}
