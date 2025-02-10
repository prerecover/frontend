import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import SearchBlock from '@/features/SearchBlock';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
  const SEARCH_QUERY = gql(`
query Search {
    search {
        clinics {
            _id
            address
            avatar
            city
            title
            country{
                title
            }
        }
        doctors {
            _id
            avatar 
            firstName
            lastName
            surname
            specialization{
                _id 
                title
            }
            workExp
            country{
                title
                }
        }
        services {
            _id
            description
            durationMin
            online
            priceMin
            title
            avatar 
            doctors{
                firstName 
                lastName
            }
            clinic{
                title
                city
            }
            category{
                title
            }
        }
        undergoings {
            _id
            createdAt
            rating
            updatedAt
            appointment {
                _id
                createdAt
                duration
                file
                notify
                online
                specialCheck
                status
                timeStart
                title
                updatedAt
                doctor {
                    _id
                    avatar
                    createdAt
                    email
                    firstName
                    lastName
                    mainStatus
                    number
                    online
                    surname
                    updatedAt
                    workExp
                }
                service {
                    _id
                    avatar
                    title
                }
                clinic{
                    city
}
            }
        }
    }
}
    `);
  const { data } = await getClient().query({ query: SEARCH_QUERY });
  return (
    <>
      <MobileHeader />
      <Header title={['Поиск']} />
      <div className="p-4">
        <SearchBlock data={data.search} />
      </div>
    </>
  );
}
