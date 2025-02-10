'use client';
import { ICountry } from '@/shared/types/country.interface';
import { ISearch } from '../SearchBlock';
import { SearchInput } from '@/components/ui/search-input';
import { ChangeEvent, useState } from 'react';
import { FilterBtn } from '@/components/ui/filter-btn';
import { FilterBox } from '@/components/ui/filter-box';
import SearchList from './search-list';
import FilterModal from './filterModal';
import { useBlurStore } from '@/shared/store/blurStore';
import { useAppointmentFilterStore } from '@/shared/store/appointmentFiltersStore';

export default function CreateAppointmentBlock({
  data,
  countries,
}: {
  countries: ICountry[];
  data: Partial<ISearch>;
}) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Услуги');
  const { setBlur } = useBlurStore();
  const { setIsOpen } = useAppointmentFilterStore();
  const [stateData, setStateData] = useState<Partial<ISearch>>(data);

  const filters = ['Услуги', 'Клиники'];
  const filterObj = {
    [filters[1]]: 'clinics',
    [filters[0]]: 'services',
  };
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleFilter = () => {
    setBlur(true);
    setIsOpen(true);
  };
  return (
    <div className="p-4 mt-[65px]">
      <div className="flex flex-col gap-4 flex-grow ">
        <div className="flex gap-3 items-center ">
          <SearchInput
            onChange={onChangeSearch}
            value={search}
            className="max-w-[1400px] mx-auto"
          />
          <FilterBtn
            onClick={() => handleFilter()}
            className="pc:hidden"
            variant="outline"
          />
        </div>
        <FilterBox
          className="max-w-[700px] my-0 mx-auto"
          style={{ margin: '0 auto' }}
          data={filters}
          isSelect={filter}
          setIsSelect={setFilter}
        />
        <div className="flex gap-3">
          <SearchList
            filter={filterObj[filter]}
            search={search}
            data={stateData}
          />
          <FilterModal
            countries={countries}
            filter={filterObj[filter]}
            setData={setStateData}
          />
        </div>
      </div>
    </div>
  );
}
