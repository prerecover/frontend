import Header from '@/components/layout/header';
import SurveyMain from '@/entities/Survey/SurveyMain';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Page() {
    const SURVEYS_QUERY = gql(`
query Surveys {
    surveys {
        _id
        createdAt
        updatedAt
        appointment {
            _id
            createdAt
            status
            timeStart
            title
            clinic {
                title
                _id
            }
            user {
                _id
                firstName
                lastName
                surname
            }
        }
        questions {
            _id
            createdAt
            text
            updatedAt
            answers {
                _id
                createdAt
                text
                updatedAt
            }
        }
    }
}
    `);
    const { data } = await getClient().query({ query: SURVEYS_QUERY });
    return (
        <>
            <Header title={['Администратор', 'Опросы']} />
            <SurveyMain surveys={data.surveys} />
        </>
    );
}
