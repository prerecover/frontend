import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import SavedMain from '@/entities/Saved/SavedMain';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
    const SAVED_QUERY = gql(`
query SavedAll {
    savedAll {
        _id
        clinic {
            _id
            avatar
            city
            title
            country{
                title
            }
        }
        doctor {
            _id
            avatar
            firstName
            lastName
            specialization
            surname
        }
        service {
            _id
            img
            price
            title
            clinic {
                _id
                title
            }
        }
    }
}
    `);
    const { data: savedData } = await getClient().query({ query: SAVED_QUERY });

    return (
        <>
            <Header title={['Сохраненное']} />
            <MobileHeader title='Сохраненное' end={false} />
            <div className='p-4 flex flex-col'>
                <SavedMain saved={savedData.savedAll} />
            </div>
        </>
    );
}
