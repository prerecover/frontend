import MobileHeader from '@/components/layout/mobileHeader';
import SearchBlock from '@/features/SearchBlock';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Search() {
    const SEARCH_QUERY = gql(`
query Search {
    search {
        clinics {
            _id
            address
            avatar
            city
            title
        
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
        }
    }
}
    `);
    const { data } = await getClient().query({ query: SEARCH_QUERY });
    return (
        <>
            <MobileHeader />
            <SearchBlock data={data.search} />
        </>
    );
}
