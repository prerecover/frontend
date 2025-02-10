import HeaderCenter from '@/components/layout/headerCenter';
import CreateAppointmentBlock from '@/features/CreateAppointmentBlock';

import { getClient } from '@/lib/apollo-client';
import { ICountry } from '@/shared/types/country.interface';
import { gql } from '@apollo/client';
const GET_COUNTRIES = gql(`
query Countries {
    countries {
        _id
        slug
        title
    }
}
`);
const SEARCH_QUERY = gql(`
query Search {
    search {
        clinics {
            _id
            address
            avatar
            city
            title
            country{
                title
            }
        }
        doctors {
            _id
            avatar 
            firstName
            lastName
            surname
            specialization{
                _id 
                title
}
            workExp
            country{
                title
                }
        }
        services {
            _id
            description
            durationMin
            durationMax
            online
            priceMin
            priceMax
            title
            avatar 
            doctors{
                firstName 
                lastName
            }
            clinic{
                title
            }
        }
    }
}
    `);
export default async function Page() {
  const { data: searchData } = await getClient().query({ query: SEARCH_QUERY });
  const { data } = await getClient().query({ query: GET_COUNTRIES });
  const countries: ICountry[] = data.countries;
  return (
    <>
      <HeaderCenter title="Добавление записи" />
      <CreateAppointmentBlock countries={countries} data={searchData.search} />
    </>
  );
}
