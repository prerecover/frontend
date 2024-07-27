import MobileHeader from '@/components/layout/mobileHeader';
import DoctorMain from '@/entities/Doctor/DoctorMain';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

async function getDoctor(_id: string) {
    const DOCTOR_QUERY = gql(`
query Doctor ($doctorId: String!){
    doctor(_id: $doctorId) {
        _id
        avatar
        firstName
        lastName
        specialization
        surname
        workExp
        services {
            _id
            description
            duration
            online
            price
            title
            doctors {
                _id
                firstName
                lastName
                surname
            }
        }
    }
}
        `);
    const { data } = await getClient().query({ query: DOCTOR_QUERY, variables: { doctorId: _id } });
    return data.doctor;
}

export default async function Page({ params }: { params: { _id: string } }) {
    const doctor = await getDoctor(params._id);
    return (
        <>
            <MobileHeader title='Врач' />
            <DoctorMain doctor={doctor} />
        </>
    );
}
