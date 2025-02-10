import MobileHeader from '@/components/layout/mobileHeader';
import ClinicNotes from '@/entities/Clinic/ClinicMain/ClinicNotes';
import { getClient } from '@/lib/apollo-client';
import { IService } from '@/shared/types/service.interface';
import { gql } from '@apollo/client';

async function getServices(_id: string) {
  const SERVICE_BY_CLINIC = gql(`
query ServiceByClinic($clinicId: String!){
    servicesByClinic(clinicId: $clinicId) {
        _id
        createdAt
        description
        durationMin
        durationMax
        avatar
        online
        offline
        treated
        priceMin
        priceMax
        title
        updatedAt
        doctors{
            firstName 
            lastName    
        }
        news{
            _id
        }

    }
}
        `);
  const { data } = await getClient().query({
    query: SERVICE_BY_CLINIC,
    variables: { clinicId: _id },
  });
  return data.servicesByClinic;
}

export default async function Page({ params }: { params: { _id: string } }) {
  const data: IService[] = await getServices(params._id);
  const services = data.filter((service) => service.offline);
  console.log(services);
  return (
    <>
      <MobileHeader title={`Офлайн услуги (${services.length})`} />
      <div className="p-4">
        <ClinicNotes services={services} />
      </div>
    </>
  );
}
