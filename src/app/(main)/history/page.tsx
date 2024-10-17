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
            doctor {
                firstName
                surname
                lastName
                specialization
}
        availableDates {
                _id
                createdAt
                date
                updatedAt
            }
        }
        surveys {
            _id
            createdAt
            passed
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
            }
        }
    }
}
    `);
    const { data } = await getClient().query({ query: HISTORY_QUERY });
    return (
        <div className='bg-white'>
            <MobileHeader />
            <Header title={['История пациента']} />
            <div className='p-4'>
                <MainHistory data={data.history} />
            </div>
        </div>
    );
}
