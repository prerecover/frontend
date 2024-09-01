'use client';
import { FilterBox } from '@/components/ui/filter-box';
import { FilterBtn } from '@/components/ui/filter-btn';
import { SearchInput } from '@/components/ui/search-input';
import { ChangeEvent, useState } from 'react';
import SearchList from './search-list';
import { IClinic } from '@/shared/types/clinic.interface';
import { IDoctor } from '@/shared/types/doctor.interface';
import { IService } from '@/shared/types/service.interface';

export type Search = {
    clinics: IClinic[];
    doctors: IDoctor[];
    services: IService[];
};

export default function SearchBlock({ data }: { data: Search }) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('Врачи');

    const filters = ['Услуги', 'Клиники', 'Врачи'];
    const filterObj = {
        [filters[1]]: 'clinics',
        [filters[2]]: 'doctors',
        [filters[0]]: 'services',
    };
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
        <>
            <div className='flex flex-col gap-4 flex-grow'>
                <div className='flex gap-3 items-center '>
                    <SearchInput
                        onChange={onChangeSearch}
                        value={search}
                        placeholder={filter == 'Клиники' ? 'Поиск клиник' : 'Поиск врачей'}
                    />
                    <FilterBtn onClick={() => console.log('click')} />
                </div>
                <FilterBox
                    className='max-w-[700px] my-0 mx-auto desktop:mx-0'
                    style={{ margin: '0 auto' }}
                    data={filters}
                    isSelect={filter}
                    setIsSelect={setFilter}
                />
                <SearchList filter={filterObj[filter]} search={search} data={data} />
            </div>
        </>
    );
}
