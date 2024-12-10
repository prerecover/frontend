import Header from '@/components/layout/header';
import AdminClinicsBlock from '@/features/AdminClinicsBlock';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

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

export default async function Page() {
    const { data } = await getClient().query({ query: ALL_CLINICS_QUERY });
    return (
        <>
            <Header title={['Клиники']} />
            <AdminClinicsBlock clinics={data.clinics} />
        </>
    );
}
