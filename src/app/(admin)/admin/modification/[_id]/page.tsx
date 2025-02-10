import ModificationClinic from '@/entities/Clinic/Modification';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

async function getClinic(_id: string) {
  const CLINIC_QUERY = gql(`
query Clinic($clinicId: String!){
    clinic(_id: $clinicId) {
        _id
        address
        age
        avatar
        card
        city
        createdAt
        deletedAt
        description
        email
        employees
        isVerfied
        specialization
        title
        treated
        typeTitle
        updatedAt
        country {
            _id
            slug
            title
        }
        detail {
            _id
            adminFirstName
            adminLastName
            adminNumber
            calendar
            computerHave
            elevatorHave
            fridayTime
            internetHave
            language
            mondayTime
            numberOfFloors
            numbers
            rating
            registryNumber
            saturdayTime
            site
            square
            sundayTime
            thursdayTime
            totalDoctors
            totalServices
            tuesdayTime
            wednesdayTime
        }
        services {
            _id
            createdAt
            description
            duration
            img
            offline
            online
            price
            title
            treated
            updatedAt
            doctors {
                _id
                avatar
                createdAt
                email
                firstName
                lastName
                mainStatus
                number
                online
                specialization
                surname
                updatedAt
                workExp
            }
        }
    }
}

        `);
  const { data } = await getClient().query({
    query: CLINIC_QUERY,
    variables: { clinicId: _id },
  });
  return data.clinic;
}
const GET_COUNTRIES = gql(`
query Countries {
    countries {
        _id
        slug
        title
    }
}
`);
// const GET_CATEGORIES = gql(`
// query ServiceCategories {
//     serviceCategories {
//         _id
//         slug
//         title
//     }
// }
// `);
export default async function Page({ params }: { params: { _id: string } }) {
  const { data: countries } = await getClient().query({ query: GET_COUNTRIES });
  // const { data: serviceCategories } = await getClient().query({ query: GET_CATEGORIES });
  const clinic = await getClinic(params._id);
  return (
    <div className="mx-auto">
      <ModificationClinic
        clinic={clinic}
        countries={countries.countries}
        // serviceCategories={serviceCategories.serviceCategories}
      />
      ;
    </div>
  );
}
