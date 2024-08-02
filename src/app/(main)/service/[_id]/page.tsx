import MobileHeader from '@/components/layout/mobileHeader';
import ServiceMain from '@/entities/Service/ServiceMain';
import { getClient } from '@/lib/apollo-client';
import { IService } from '@/shared/types/service.interface';
import { gql } from '@apollo/client';

async function getService(_id: string) {
    const SERVICE_QUERY = gql(`
query Service($serviceId: String!){
    service(_id: $serviceId) {
        description
        duration
        online
        price
        title
        clinic {
            _id
            title
        }
        doctors {
            _id
            firstName
            lastName
        }
        news {
            _id
            createdAt
            text
            title
            updatedAt
            newsImages{
                image
            }
            newsVideos{
                video
            }
        }
    }
}
        `);
    const { data } = await getClient().query({ query: SERVICE_QUERY, variables: { serviceId: _id } });
    return data.service;
}

export default async function Page({ params }: { params: { _id: string } }) {
    const service: IService = await getService(params._id);
    return (
        <>
            <MobileHeader title={`${service.online ? 'Онлайн услуга' : 'Офлайн услуга'}`} end={false} />

            <ServiceMain service={service} />
        </>
    );
}
