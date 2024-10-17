'use client';
import { FilterBox } from '@/components/ui/filter-box';
import { SearchInput } from '@/components/ui/search-input';
import { IAppointment } from '@/shared/types/appointment.interface';
import { useState } from 'react';
import HistoryList from './history-list';
import { ISurvey } from '@/shared/types/survey.interface';
import { Text } from '@/components/ui/text';
import Image from 'next/image';
import ProfitStats from '../HealthAbout/profit-stats';
import Stats from '../HealthAbout/stats';
import { useAuth } from '@/app/(auth)/auth-wrapper';

export type History = {
    appointments: IAppointment[];
    surveys: ISurvey[];
};
export default function MainHistory({ data }: { className?: string; data: History }) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('Записи');
    const { user } = useAuth();

    const filters = ['Записи', 'Опрос', 'Файлы'];
    const filterObj = {
        [filters[2]]: 'files',
        [filters[0]]: 'appointments',
        [filters[1]]: 'surveys',
    };
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return (
        <div className='flex flex-col gap-3 max-w-[730px] mx-auto reverse_slider:max-w-none'>
            <div className='flex flex-col bg-white p-4 rounded-[20px] pc:min-w-[600px] reverse_slider:hidden'>
                <div className='flex-between pl-[21px] gap-2 text-[12px] text-grey-700 font-medium mb-[14px]'>
                    <div className='flex gap-5'>
                        <Text>Врачей 7</Text>
                        <Text>Записей {user.appointments.length}</Text>
                    </div>
                    <Text className='pr-[30px]'>Последние 30 дней</Text>
                </div>
                <div className='flex gap-[17px] '>
                    <Image
                        src={'/assets/skelet.svg'}
                        width={173}
                        height={478}
                        alt='user'
                        className='mt-[14px] reverse_slider:w-[131px] reverse_slider:h-[367px]'
                    />
                    <div className='flex flex-col gap-[10px] w-full'>
                        <ProfitStats />
                        <Stats />
                    </div>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <SearchInput onChange={onChangeSearch} value={search} />
                {/* <FilterBtn onClick={() => console.log('click')} /> */}
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
