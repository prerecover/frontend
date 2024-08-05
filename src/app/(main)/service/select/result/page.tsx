'use client';
import MobileHeader from '@/components/layout/mobileHeader';
import { FilterBtn } from '@/components/ui/filter-btn';
import { SearchInput } from '@/components/ui/search-input';
import ServiceOfDoctorCard from '@/entities/Service/ServiceOfDoctorCard';
import { useSelectedServicesStore } from '@/shared/store/selectedServicesStore';
import { useState } from 'react';
export default function Page() {
    const { services } = useSelectedServicesStore();
    const [search, setSearch] = useState<string>('');
    return (
        <>
            <MobileHeader title='Все услуги' end={false} />
            <div className='flex gap-3 items-center p-4'>
                <SearchInput onChange={(e) => setSearch(e.currentTarget.value)} value={search} />
                <FilterBtn onClick={() => console.log('click')} />
            </div>
            <div className='flex flex-col gap-4 p-4'>
                {services
                    .filter((service) =>
                        Object.values(service).some((value) => {
                            if (typeof value === 'string') {
                                return value.toLowerCase().includes(search.toLowerCase());
                            }
                        }),
                    )
                    .map((service, i) => (
                        <ServiceOfDoctorCard key={service._id} service={service} num={i + 1} />
                    ))}
            </div>
        </>
    );
}
