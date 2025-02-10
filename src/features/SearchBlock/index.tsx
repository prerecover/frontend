'use client';
import { FilterBox } from '@/components/ui/filter-box';
import { SearchInput } from '@/components/ui/search-input';
import { ChangeEvent, useEffect, useState } from 'react';
import SearchList from './search-list';
import { IClinic } from '@/shared/types/clinic.interface';
import { IDoctor } from '@/shared/types/doctor.interface';
import { IService } from '@/shared/types/service.interface';
import { IUndergoing } from '@/shared/types/undergoings.interface';
import { SearchFilter } from '@/components/ui/search-filter';
import { gql, useQuery } from '@apollo/client';

const GET_CATEGORIES = gql(`
query ServiceCategories {
    serviceCategories {
        _id
        slug
        title
    }
}
`);
const GET_SPECIALIZATIONS = gql(`
query DoctorSpecializations {
    doctorSpecializations {
        _id
        slug
        title
    }
}

`);
export interface ISearch {
  clinics: IClinic[];
  doctors: IDoctor[];
  services: IService[];
  undergoings: IUndergoing[];
}
export interface IFilters {
  priceFilter?: string;
  categoryFilter?: string;
  workExpFilter: string;
  specializationFilter: string;
  cityFilter?: string;
  orderFilter?: string;
}

export default function SearchBlock({ data }: { data: ISearch }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Услуги');
  const [filtersState, setFilters] = useState<IFilters>({
    priceFilter: '',
    categoryFilter: '',
    workExpFilter: '',
    specializationFilter: '',
    cityFilter: '',
    orderFilter: '',
  });

  const [categories, setCategories] = useState([]);
  const [specializaitons, setSpecializations] = useState([]);
  const { data: categoriesData } = useQuery(GET_CATEGORIES);
  const { data: specData } = useQuery(GET_SPECIALIZATIONS);

  const filters = ['Услуги', 'Клиники', 'Врачи', 'Прохождения'];
  const filterObj = {
    [filters[1]]: 'clinics',
    [filters[2]]: 'doctors',
    [filters[0]]: 'services',
    [filters[3]]: 'undergoings',
  };
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (categoriesData) {
      const categoryArray = [];
      categoriesData.serviceCategories.map((el) => {
        categoryArray.push(el.title);
      });
      setCategories(categoryArray);
    }
  }, [categoriesData, specData]);
  useEffect(() => {
    if (specData) {
      const specArray = [];
      specData.doctorSpecializations.map((el) => {
        if (!specArray.includes(el.title)) {
          specArray.push(el.title);
        }
      });
      setSpecializations(specArray);
    }
  }, [specData]);
  return (
    <>
      <div className="flex flex-col gap-4 flex-grow ">
        <div className="flex gap-3 items-center ">
          <SearchInput
            onChange={onChangeSearch}
            value={search}
            placeholder={
              filter == 'Клиники'
                ? 'Поиск клиник'
                : filter == 'Врачи'
                  ? 'Поиск врачей'
                  : filter == 'Услуги'
                    ? 'Поиск услуг'
                    : 'Поиск прохождений'
            }
          />
        </div>
        <div className="flex flex-col pc:justify-between w-full pc:flex-row gap-2">
          <FilterBox
            className="max-w-[700px] my-0 desktop:mx-0"
            style={{ margin: '0 auto' }}
            data={filters}
            isSelect={filter}
            setIsSelect={setFilter}
          />
          <div className="flex gap-3">
            {filter == 'Услуги' ? (
              <div className="flex w-fit gap-3">
                <SearchFilter
                  data={['От', 'До']}
                  placeholder="Цена"
                  filterObj={filtersState}
                  setValue={setFilters}
                  name="priceFilter"
                />
                <SearchFilter
                  data={categories}
                  placeholder="Категория"
                  filterObj={filtersState}
                  setValue={setFilters}
                  name="categoryFilter"
                />
              </div>
            ) : filter == 'Врачи' ? (
              <div className="flex w-fit">
                <SearchFilter
                  data={[
                    'Все',
                    'До 1 года',
                    'До 2 лет',
                    'До 5 лет',
                    'От 5 лет',
                  ]}
                  placeholder="Опыт работы"
                  filterObj={filtersState}
                  setValue={setFilters}
                  name="workExpFilter"
                />
                <SearchFilter
                  data={specializaitons}
                  placeholder="Специальность"
                  filterObj={filtersState}
                  setValue={setFilters}
                  name="specializationFilter"
                />
              </div>
            ) : (
              <>
                <SearchFilter
                  data={[
                    'Самые новые',
                    'Оценке услуги',
                    'По рассчитанной пользе',
                    'По полученной пользе',
                    'По схожести параметров',
                  ]}
                  placeholder="Сортировать по"
                  filterObj={filtersState}
                  setValue={setFilters}
                  name="orderFilter"
                />
              </>
            )}
            <SearchFilter
              data={['Москва', 'Юнус-Абад']}
              placeholder="Выбрать город"
              filterObj={filtersState}
              setValue={setFilters}
              name="cityFilter"
            />
          </div>
        </div>
        <SearchList
          filter={filterObj[filter]}
          search={search}
          data={data}
          filtersState={filtersState}
        />
      </div>
    </>
  );
}
