import MobileHeader from '@/components/layout/mobileHeader';
import ClinicNews from '@/entities/Clinic/ClinicMain/ClinicNews';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

async function getServices(_id: string) {
    const NEWS_BY_CLINIC = gql(`
        query getNews($clinicId: String!){
            newsByClinic(clinicId: $clinicId){
            _id,
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
            
        }
    }
    `);
    const { data } = await getClient().query({ query: NEWS_BY_CLINIC, variables: { clinicId: _id } });
    return data.newsByClinic;
}

export default async function Page({ params }: { params: { _id: string } }) {
    const news = await getServices(params._id);
    return (
        <>
            <MobileHeader title='Новости' end={false} />
            <ClinicNews news={news} />
        </>
    );
}
