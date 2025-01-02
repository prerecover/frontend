import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import EndMenu from '@/components/layout/mobileHeader/end-menu';
import ClinicMain from '@/entities/Clinic/ClinicMain';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';
import { cookies } from 'next/headers';

async function getClinic(_id: string) {
    const CLINIC_QUERY = gql(`
query Clinic($clinicId: String!){
    clinic(_id: $clinicId) {
        _id
        address
        avatar
        city
        createdAt
        title
        treated
        services {
            _id
            online
            offline
            title
            price
            treated
            duration
            doctors{
                firstName
                lastName
                surname
                avatar
            }
        }
        country {
            _id
            slug
            title
        }
        detail {
            _id
            adminFirstName
            adminLastName
            adminNumber
            calendar
            computerHave
            elevatorHave
            fridayTime
            internetHave
            language
            mondayTime
            numberOfFloors
            numbers
            rating
            registryNumber
            saturdayTime
            site
            square
            sundayTime
            thursdayTime
            totalDoctors
            totalServices
            tuesdayTime
            wednesdayTime
        }
        doctors {
            _id
            avatar 
            firstName 
            lastName 
            surname
            specialization
        }
    }
}
        `);
    const { data } = await getClient().query({ query: CLINIC_QUERY, variables: { clinicId: _id } });
    return data.clinic;
}

export default async function Page({ params }: { params: { _id: string } }) {
    const clinic = await getClinic(params._id);
    const { get } = cookies();
    console.log(clinic.news);
    return (
        <>
            <MobileHeader title='Клиника' />

            <Header title={['Поиск', 'Профиль клиники']} />
            <div className='bg-white'>
                <ClinicMain clinic={clinic} />
            </div>
            <EndMenu token={get('access_token')?.value} />
        </>
    );
}
