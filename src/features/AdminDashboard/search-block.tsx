import { FilterBox } from '@/components/ui/filter-box';
import { FilterBtn } from '@/components/ui/filter-btn';
import { SearchInput } from '@/components/ui/search-input';
import { useState } from 'react';

export default function SearchBlock() {
    const [search, setSearch] = useState('');
    const [active, setActive] = useState('Услуги');
    const data = ['Услуги', 'Врачи', 'Клиники'];
    return (
        <div className='flex flex-col min-w-[490px]'>
            <div className='w-full flex flex-col gap-4 bg-white-background h-screen pb-4 px-[18px]'>
                <div className='flex gap-3 items-center'>
                    <SearchInput onChange={(e) => setSearch(e.currentTarget.value)} value={search} />
                    <FilterBtn onClick={() => console.log('click')} />
                </div>
                <FilterBox data={data} isSelect={active} setIsSelect={setActive} />
            </div>
        </div>
    );
}
