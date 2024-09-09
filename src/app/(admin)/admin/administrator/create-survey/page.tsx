import CheckAppointments from '@/features/CheckAppointments';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
    const ALL_APPOINTMENTS_QUERY = gql(`
query AllAppointments{
     allAppointments(approoved: true) {
        _id
        createdAt
        notify
        timeStart
        title
        online
        clinic{
            title
        }
        doctor{
            specialization 
            firstName 
lastName
            surname 
            avatar
        }
        service{
            duration
        }
    }
}
    `);
    const { data } = await getClient().query({ query: ALL_APPOINTMENTS_QUERY });
    return <CheckAppointments appointments={data.allAppointments} />;
}
