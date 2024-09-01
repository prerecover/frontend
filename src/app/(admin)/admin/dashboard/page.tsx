import Header from '@/components/layout/header';
import AdminDasboard from '@/features/AdminDashboard';
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
            rating
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
            specialization
            workExp
            country{
                title
                }
        }
        services {
            _id
            description
            duration
            online
            price
            title
            img
            doctors{
                firstName 
                lastName
            }
            clinic{
                title
            }
        }
    }
}
    `);
    const { data } = await getClient().query({ query: SEARCH_QUERY });
    return (
        <>
            <Header title={['Работа сайта']} />
            <div className='p-4'>
                <AdminDasboard data={data.search} />
            </div>
        </>
    );
}
