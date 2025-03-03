import AdminBlock from '@/features/AdminBlock';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const ALL_APPOINTMENTS_QUERY = gql(`
query AllAppointments {
    allAppointments {
        _id
        createdAt
        notify
        status
        title
        user {
            _id
            userId
            address
            city
            number
        }
        service {
            title
        }
        clinic {
            title
            city
            address
            typeTitle
        }
        doctor {
            number
            firstName
            lastName
            surname
        }
    }
}
`);

const ALL_CLINICS_QUERY = gql(`
query Clinics {
    clinics {
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
    }
}


    `);

const GET_COUNTRIES = gql(`
query Countries {
    countries {
        _id
        slug
        title
    }
}
`);
export default async function Page() {
  const { data: clinics } = await getClient().query({
    query: ALL_CLINICS_QUERY,
  });
  const { data: appointments } = await getClient().query({
    query: ALL_APPOINTMENTS_QUERY,
  });
  const { data: countries } = await getClient().query({ query: GET_COUNTRIES });
  return (
    <>
      <AdminBlock
        clinics={clinics.clinics}
        countries={countries.countries}
        appointments={appointments.allAppointments}
      />
    </>
  );
}
