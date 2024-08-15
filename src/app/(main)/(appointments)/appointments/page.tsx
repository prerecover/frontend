import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import AppointmentMain from '@/entities/Appointment/AppointmentMain';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
    const APPOINTMENTS_QUERY = gql(`
query Appointments {
    appointments {
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
    const { data } = await getClient().query({ query: APPOINTMENTS_QUERY });
    console.log(new Date());
    return (
        <>
            <MobileHeader title='Записи' />
            <Header title={['Записи']} />
            <div className='p-4'>
                <AppointmentMain data={data.appointments} />
            </div>
        </>
    );
}
