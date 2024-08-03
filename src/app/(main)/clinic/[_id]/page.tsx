import MobileHeader from '@/components/layout/mobileHeader';
import ClinicMain from '@/entities/Clinic/ClinicMain';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

async function getClinic(_id: string) {
    const CLINIC_QUERY = gql(`
query Clinic($clinicId: String!){
    clinic(_id: $clinicId) {
        _id
        address
        avatar
        city
        title
        services {
            _id
            online
            offline
        }
        country {
            _id
            slug
            title
        }
        news {
            _id
        }
        doctors {
            _id
        }
    }
}
        `);
    const { data } = await getClient().query({ query: CLINIC_QUERY, variables: { clinicId: _id } });
    return data.clinic;
}

export default async function Page({ params }: { params: { _id: string } }) {
    const clinic = await getClinic(params._id);
    return (
        <>
            <MobileHeader title='Клиника' />
            <div className='bg-white p-4'>
                <ClinicMain clinic={clinic} />
            </div>
        </>
    );
}
