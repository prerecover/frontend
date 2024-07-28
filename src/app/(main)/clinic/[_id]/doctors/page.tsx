import MobileHeader from '@/components/layout/mobileHeader';
import ClinicDoctors from '@/entities/Clinic/ClinicMain/ClinicDoctors';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

async function getDoctors(_id: string) {
    const DOCTORS_BY_CLINIC = gql(`
query DoctorsByClinic ($clinicId: String!){
    doctorsByClinic(clinicId: $clinicId) {
        _id
        avatar
        firstName 
        lastName
        specialization 
    }
}
        `);
    const { data } = await getClient().query({ query: DOCTORS_BY_CLINIC, variables: { clinicId: _id } });
    return data.doctorsByClinic;
}

export default async function Page({ params }: { params: { _id: string } }) {
    const doctors = await getDoctors(params._id);
    return (
        <>
            <MobileHeader title='Врачи' end={false} />
            <div className='p-4'>
                <ClinicDoctors doctors={doctors} />
            </div>
        </>
    );
}
