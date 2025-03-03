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
        createdAt
        title
        treated
        services {
            _id
            online
            offline
            title
            priceMin
            priceMax
            treated
            durationMin
            durationMax
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
            specialization{
                _id
                title
}
        }
    }
}
        `);
  const { data, errors } = await getClient().query({
    query: CLINIC_QUERY,
    variables: { clinicId: _id },
  });
  console.log(errors);
  return data.clinic;
}

export default async function Page({ params }: { params: { _id: string } }) {
  const clinic = await getClinic(params._id);
  console.log(clinic.news);
  return (
    <>
      <MobileHeader title="Клиника" />

      <Header title={['Поиск', 'Профиль клиники']} />
      <div className="bg-white">
        <ClinicMain clinic={clinic} />
      </div>
    </>
  );
}
