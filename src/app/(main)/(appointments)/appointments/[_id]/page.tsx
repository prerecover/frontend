import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import AppointmentMain from '@/entities/Appointment/AppointmentMain';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

const APPOINTMENT_QUERY = gql(`
query Appointment ($_id: String!){
    appointment(_id: $_id){
        _id
        status
        timeStart
        title
        clinic {
            _id
            address
            avatar
            city
            title
        }
        doctor {
            _id
            avatar
            firstName
            lastName
            specialization
            surname
        }
        service {
            _id
            duration
            treated
            title
        }
        survey {
            _id
            createdAt
            passed
            updatedAt
            questions {
                _id
                createdAt
                text
                updatedAt
                answer {
                    _id
                    createdAt
                    text
                    updatedAt
                }
            }
        }
}
}
`);

export default async function Page({ params }: { params: { _id: string } }) {
    const { data } = await getClient().query({ query: APPOINTMENT_QUERY, variables: { _id: params._id } });
    return (
        <>
            <Header title={['Профиль клиники']} />
            <MobileHeader title='Онлайн услуга' end={false} />
            <AppointmentMain appointment={data.appointment} />
        </>
    );
}
