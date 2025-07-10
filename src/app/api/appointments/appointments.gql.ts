import { gql } from "@apollo/client";

export const ALL_APPOINTMENTS_QUERY = gql(`
query AllAppointments($status: String){
     allAppointments(status: $status) {
        _id
        createdAt
        notify
        timeStart
        title
        online
        status
        clinic{
            title
        }
        doctor{
            specialization {
            _id 
            title
        }
            firstName 
            lastName
            surname 
            avatar
        }
        survey{
            _id
        }
        service{
            durationMax
        }
    }
}
    `);