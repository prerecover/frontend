import RegistrationClinic from '@/entities/Clinic/Registration';
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
const GET_CATEGORIES = gql(`
query ServiceCategories {
    serviceCategories {
        _id
        slug
        title
    }
}
`);
export default async function Page() {
    const { data } = await getClient().query({ query: GET_COUNTRIES });
    const { data: serviceCategories } = await getClient().query({ query: GET_CATEGORIES });
    const countries: ICountry[] = data.countries;
    return (
        <div className='mx-auto'>
            <RegistrationClinic countries={countries} serviceCategories={serviceCategories.serviceCategories} />
        </div>
    );
}
