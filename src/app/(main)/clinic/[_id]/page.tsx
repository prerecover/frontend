import Header from '@/components/layout/header';
import MobileHeader from '@/components/layout/mobileHeader';
import ClinicMain from '@/entities/Clinic/ClinicMain';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

async function getClinic(_id: string) {
    const CLINIC_QUERY = gql(`
query Clinic($clinicId: String!){
    clinic(_id: $clinicId) {
        _id
        address
        avatar
        city
        title
        services {
            _id
            online
            offline
            title
            price
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
        news {
            _id
            text,
            title,
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
            clinic{
                avatar,
                title
            }
            newsVideos {
                _id
                video
            }
            newsImages {
                _id
                image
            }
            
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
    console.log(clinic.news);
    return (
        <>
            <MobileHeader title='Клиника' />

            <Header title={['Поиск', 'Профиль клиники']} />
            <div className='bg-white'>
                <ClinicMain clinic={clinic} />
            </div>
        </>
    );
}
