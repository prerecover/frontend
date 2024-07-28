'use client';
import { FilterBtn } from '@/components/ui/filter-btn';
import { SearchInput } from '@/components/ui/search-input';
import ServiceOfDoctorCard from '@/entities/Service/ServiceOfDoctorCard';
import { IService } from '@/shared/types/service.interface';
import { ChangeEvent, useState } from 'react';

export default function ClinicNotes({ services }: { services: IService[] }) {
    const [search, setSearch] = useState<string>('');
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
        <>
            <div className='flex gap-3 items-center'>
                <SearchInput onChange={onChangeSearch} value={search} />
                <FilterBtn onClick={() => console.log('click')} />
            </div>
            <div className='gap-4 flex flex-col mt-4'>
                {services
                    .filter((service) =>
                        Object.values(service).some((value) => {
                            if (typeof value === 'string') {
                                return value.toLowerCase().includes(search.toLowerCase());
                            }
                        }),
                    )
                    .map((service, i) => (
                        <ServiceOfDoctorCard service={service} key={i} num={i + 1} />
                    ))}
            </div>
        </>
    );
}
