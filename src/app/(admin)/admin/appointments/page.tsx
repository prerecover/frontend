import Header from '@/components/layout/header';
import AdminAppointmentsBlock from '@/features/AdminAppointmentsBlock';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const ALL_APPOINTMENTS_QUERY = gql(`
query AllAppointments{
     allAppointments {
        _id
        createdAt
        notify
        timeStart
        title
        online
        status
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
        surveys{
            _id
        }
        service{
            duration
        }
    }
}
    `);

export default async function Page() {
    const { data } = await getClient().query({ query: ALL_APPOINTMENTS_QUERY });
    return (
        <div>
            <Header title={['Администратор', 'Записи']} />
            <AdminAppointmentsBlock appointments={data.allAppointments} />
        </div>
    );
}
