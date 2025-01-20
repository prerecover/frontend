import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import RecentSlider from '@/components/recentSwiper';
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
            durationMin
            durationMax
            online
            priceMin
            priceMax
            title
            avatar 
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
    const { data, errors } = await getClient().query({ query: SEARCH_QUERY });
    console.log(errors);
    return (
        <>
            <SurveyUserMain />
            <Header title={['Рекомендации']} />
            <MobileHeader />
            <div className='p-7'>
                <RecentSlider data={data.search} />
            </div>
            <AppointmentWarnList />
            <SurveyWarnList />
            <RecomendationsBlock recomendationsData={data.search} />
        </>
    );
}
