import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import MainHistory from '@/features/MainHistory';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
    const HISTORY_QUERY = gql(`
query History {
    history {
        appointments {
            _id
            timeStart
            title
            service{
                duration
            }            
        }
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
            specialization
            surname
            workExp
            country{
                title
            }
        }
    }
}
    `);
    const { data } = await getClient().query({ query: HISTORY_QUERY });
    return (
        <>
            <MobileHeader />
            <Header title={['История пациента']} />
            <div className='p-4'>
                <MainHistory data={data.history} />
            </div>
        </>
    );
}
