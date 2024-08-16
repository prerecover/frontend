'use client';
import { FilterBox } from '@/components/ui/filter-box';
import { FilterBtn } from '@/components/ui/filter-btn';
import { SearchInput } from '@/components/ui/search-input';
import { IAppointment } from '@/shared/types/appointment.interface';
import { IClinic } from '@/shared/types/clinic.interface';
import { IDoctor } from '@/shared/types/doctor.interface';
import { useState } from 'react';
import HistoryList from './history-list';

export type History = {
    appointments: IAppointment[];
    doctors: IDoctor[];
    surveys: any[] | null;
    clinics: IClinic[];
};
export default function MainHistory({ data }: { className?: string; data: History }) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('Записи');

    const filters = ['Записи', 'Опрос', 'Клиники', 'Врачи', 'Файлы'];
    const filterObj = {
        [filters[2]]: 'clinics',
        [filters[3]]: 'doctors',
        [filters[4]]: 'files',
        [filters[0]]: 'appointments',
        [filters[1]]: 'surveys',
    };
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex gap-3 items-center'>
                <SearchInput onChange={onChangeSearch} value={search} />
                <FilterBtn onClick={() => console.log('click')} />
            </div>
            <FilterBox
                className='my-0 mx-auto desktop:justify-center desktop:my-0 desktop:m-auto'
                style={{ margin: '0 auto' }}
                data={filters}
                isSelect={filter}
                setIsSelect={setFilter}
            />
            <HistoryList data={data} filter={filterObj[filter]} search={search} />
        </div>
    );
}
