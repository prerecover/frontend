import Header from '@/components/layout/header';
import AdminRegistrationBlock from '@/features/AdminRegistrationBlock';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const ALL_CLINICS_QUERY = gql(`
query AllClinics{
    clinics {
        _id
        address
        adminFirstName
        adminLastName
        adminNumber
        avatar
        card
        city
        createdAt
        deletedAt
        description
        email
        employees
        endTime
        isVerfied
        number
        rating
        site
        specialization
        startTime
        title
        treated
        updatedAt
        workDays
    }
}
    `);

export default async function Page() {
    const { data } = await getClient().query({ query: ALL_CLINICS_QUERY });
    return (
        <>
            <Header title={['Администратор', 'Регистрация']} />
            <AdminRegistrationBlock clinics={data.clinics} />
        </>
    );
}
