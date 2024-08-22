import RegistrationClinic from '@/entities/Clinic/Registration';
import { getClient } from '@/lib/apollo-client';
import { ICountry } from '@/shared/types/country.interface';

import { gql } from '@apollo/client';

const VALIDATE_LINK = gql(`
query ValidateLink ($_id: String!){
    validateLink(_id: $_id) {
        clinicEmail
    }
}

`)

const GET_COUNTRIES = gql(`
query Countries {
    countries {
        _id
        slug
        title
    }
}
`);


export default async function Page({ params: { link } }: { params: { link: string } }) {
    const { data } = await getClient().query({ query: GET_COUNTRIES });
    const { data: linkData } = await getClient().query({ query: VALIDATE_LINK, variables: { _id: link } });
    const countries: ICountry[] = data.countries;
    return <RegistrationClinic countries={countries} email={linkData.validateLink.clinicEmail} />;
}
