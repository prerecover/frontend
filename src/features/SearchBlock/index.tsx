'use client';
import { FilterBox } from '@/components/ui/filter-box';
import { FilterBtn } from '@/components/ui/filter-btn';
import { SearchInput } from '@/components/ui/search-input';
import { ChangeEvent, useState } from 'react';

export default function SearchBlock(data) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('Клиника');

    const filters = ['Клиника', 'Врачи', 'Услуги'];
    const filterObj = {
        [filters[0]]: 'clinics',
        [filters[1]]: 'doctors',
        [filters[2]]: 'services',
    };
    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    return (
        <>
            <div className='flex flex-col gap-4 flex-grow'>
                <div className='flex gap-3 items-center'>
                    <SearchInput
                        onChange={onChangeSearch}
                        value={search}
                        placeholder={filter == 'Клиника' ? 'Поиск клиник' : 'Поиск врачей'}
                    />
                    <FilterBtn onClick={() => console.log('click')} />
                </div>
                <FilterBox
                    className='max-w-[700px] my-0 mx-auto desktop:justify-center desktop:my-0 desktop:m-auto'
                    style={{ margin: '0 auto' }}
                    data={filters}
                    isSelect={filter}
                    setIsSelect={setFilter}
                />
            </div>
        </>
    );
}
