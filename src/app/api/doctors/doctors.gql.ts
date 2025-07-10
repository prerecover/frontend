import { gql } from '@apollo/client';

export const DOCTORS_BY_CLINIC_QUERY = gql(`
    query DoctorsByClinic($clinicId: String!) {
        doctorsByClinic(clinicId: $clinicId) {
            workExp
            specialization {
                title
            }
            online
            services {
                title
            }
        }
    }
`);
