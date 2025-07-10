import Header from '@/components/layout/header';
import CheckAppointments from '@/features/CheckAppointments';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
  const ALL_APPOINTMENTS_QUERY = gql(`
query AllAppointments{
     allAppointments(status: "Approoved") {
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
            specialization {
            _id 
            title
}
            firstName 
lastName
            surname 
            avatar
        }
        survey{
            _id
        }
        service{
            durationMax
        }
    }
}
    `);
  const { data } = await getClient().query({ query: ALL_APPOINTMENTS_QUERY });
  console.log(data);
  return (
    <>
      <Header title={['Администратор', 'Проверка записей']} />
      <CheckAppointments appointments={data.allAppointments} />
    </>
  );
}
