import { FilterBox } from '@/components/ui/filter-box';
import { FilterBtn } from '@/components/ui/filter-btn';
import { SearchInput } from '@/components/ui/search-input';
import { useState } from 'react';
import { Search } from '../SearchBlock';
import SearchList from '../SearchBlock/search-list';

export default function SearchBlock({ searchData }: { searchData: Search }) {
    const [filter, setFilter] = useState('Услуги');
    const [search, setSearch] = useState('');

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
        <div className='flex flex-col min-w-[490px]'>
            <div className='w-full flex flex-col gap-4 bg-white-background h-screen pb-4 px-[18px]'>
                <div className='flex gap-3 items-center'>
                    <SearchInput onChange={(e) => setSearch(e.currentTarget.value)} value={search} />
                    <FilterBtn onClick={() => console.log('click')} />
                </div>
                <FilterBox data={filters} isSelect={filter} setIsSelect={setFilter} />
                <SearchList filter={filterObj[filter]} search={search} data={searchData} />
            </div>
        </div>
    );
}
