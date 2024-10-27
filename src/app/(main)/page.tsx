import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import AppointmentWarnList from '@/entities/Appointment/AppointmentWarnList';
import SurveyUserMain from '@/entities/Survey/SurveyUserMain';
import SurveyWarnList from '@/entities/Survey/SurveyWarnList';
import RecomendationsBlock from '@/features/RecomendationsBlock';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Home() {
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
            <SurveyUserMain />
            <Header title={['О здоровье']} />
            <MobileHeader />
            <AppointmentWarnList />
            <SurveyWarnList />
            <RecomendationsBlock data={data.search} />
        </>
    );
}
