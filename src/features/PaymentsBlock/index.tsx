'use client';
import { FilterBox } from '@/components/ui/filter-box';
import { Statistic } from './statistic';
import { useState } from 'react';
import { Operations } from './operations';

export default function PaymentsBlock() {
    const [filter, setFilter] = useState('Все операции');

    const filters = ['Все операции', 'Покупки', 'Отмены'];
    return (
        <div className='flex flex-col gap-3'>
            <Statistic />
            <FilterBox isSelect={filter} setIsSelect={setFilter} data={filters} />
            <Operations />
        </div>
    );
}
