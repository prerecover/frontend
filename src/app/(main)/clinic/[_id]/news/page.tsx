import MobileHeader from '@/components/layout/mobileHeader';
import { getClient } from '@/lib/apollo-client';
import { IService } from '@/shared/types/service.interface';
import { gql } from '@apollo/client';

async function getServices(_id: string) {
    const SERVICE_BY_CLINIC = gql(`
query ServiceByClinic($clinicId: String!){
    servicesByClinic(clinicId: $clinicId) {
        _id
        createdAt
        description
        duration
        img
        online
        price
        title
        updatedAt
    }
}
        `);
    const { data } = await getClient().query({ query: SERVICE_BY_CLINIC, variables: { clinicId: _id } });
    return data.servicesByClinic;
}

export default async function Page({ params }: { params: { _id: string } }) {
    const service: IService = await getServices(params._id);
    return (
        <>
            <MobileHeader title='Новости' />
            <div className='bg-white p-4'>{service.price}</div>
        </>
    );
}
