'use client';
import { ICountry } from '@/shared/types/country.interface';
import { Search } from '../SearchBlock';
import { SearchInput } from '@/components/ui/search-input';
import { ChangeEvent, useState } from 'react';
import { FilterBtn } from '@/components/ui/filter-btn';
import { FilterBox } from '@/components/ui/filter-box';
import SearchList from './search-list';

export default function CreateAppointmentBlock({ data }: { countries: ICountry[]; data: Partial<Search> }) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('Услуги');

    const filters = ['Услуги', 'Клиники'];
    const filterObj = {
        [filters[1]]: 'clinics',
        [filters[0]]: 'services',
    };
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
        <div className='p-4'>
            <div className='flex flex-col gap-4 flex-grow '>
                <div className='flex gap-3 items-center '>
                    <SearchInput
                        onChange={onChangeSearch}
                        value={search}
                        placeholder={filter == 'Клиники' ? 'Поиск клиник' : 'Поиск врачей'}
                    />
                    <FilterBtn onClick={() => console.log('click')} className='' />
                </div>
                <FilterBox
                    className='max-w-[700px] my-0 mx-auto'
                    style={{ margin: '0 auto' }}
                    data={filters}
                    isSelect={filter}
                    setIsSelect={setFilter}
                />
                <SearchList filter={filterObj[filter]} search={search} data={data} />
            </div>
        </div>
    );
}
