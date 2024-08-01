import MobileHeader from '@/components/layout/mobileHeader';
import AccountBlock from '@/entities/User/Account';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const APPOINTMENTS_QUERY = gql(`
query Appointments {
    appointments {
        _id
        createdAt
        notify
        timeEnd
        timeStart
        title
        online
        clinic{
            title
        }
        doctor{
            specialization 
            firstName 
            surname 
        }
    }
}
    `);

export default async function Page() {
    const { data } = await getClient().query({ query: APPOINTMENTS_QUERY });
    return (
        <>
            <MobileHeader />
            <AccountBlock data={data.appointments} />
        </>
    );
}
