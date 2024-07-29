import MobileHeader from '@/components/layout/mobileHeader';
import SavedMain from '@/entities/Saved/SavedMain';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
    const SAVED_QUERY = gql(`
query SavedAll {
    savedAll {
        _id
        createdAt
        updatedAt
        news {
            _id
            text
            title
            like{
                _id
                author{
                    _id
                }
            }
            saved{
                _id
                author{
                    _id
                }
            }
        }
    }
}
    `);
    const { data: savedData } = await getClient().query({ query: SAVED_QUERY });

    console.log(savedData.savedAll);
    return (
        <>
            <MobileHeader title='Сохраненное' end={false} />
            <div className='p-4 flex flex-col'>
                <SavedMain saved={savedData.savedAll} />
            </div>
        </>
    );
}
