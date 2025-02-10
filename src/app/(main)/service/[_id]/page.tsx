import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import ServiceMain from '@/entities/Service/ServiceMain';
import { getClient } from '@/lib/apollo-client';
import { IService } from '@/shared/types/service.interface';
import { gql } from '@apollo/client';

async function getService(_id: string) {
  const SERVICE_QUERY = gql(` query Service($serviceId: String!){
    service(_id: $serviceId) {
        _id
        description
        durationMin
        durationMax
        online
        priceMin
        priceMax
        title
        category {
            _id
            slug
            title
        }
        treated
        createdAt
        appointments {
            _id
            title
            user {
                userId
                _id
            }
            clinic {
                title
            }
            doctor {
                _id
                firstName
                lastName
                surname
 
            }
        }
        clinic {
            createdAt
            _id
            title
            treated
            avatar
            address
            city
            country{
                title
            }
            detail {
            _id
            adminFirstName
            adminLastName
            adminNumber
            calendar
            computerHave
            elevatorHave
            fridayTime
            internetHave
            language
            mondayTime
            numberOfFloors
            numbers
            rating
            registryNumber
            saturdayTime
            site
            square
            sundayTime
            thursdayTime
            totalDoctors
            totalServices
            tuesdayTime
            wednesdayTime
        }
        }
        doctors {
            _id
            firstName
            lastName
            surname
            avatar
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
  const { data } = await getClient().query({
    query: SERVICE_QUERY,
    variables: { serviceId: _id },
  });
  return data.service;
}

export default async function Page({ params }: { params: { _id: string } }) {
  const service: IService = await getService(params._id);
  return (
    <>
      <Header title={['Поиск', 'Профиль услуги']} />
      <MobileHeader
        title={`${service.online ? 'Онлайн услуга' : 'Офлайн услуга'}`}
      />

      <ServiceMain service={service} />
    </>
  );
}
