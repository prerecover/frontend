import { gql } from "@apollo/client";

export const APPOINTMENTS_QUERY = gql`
  query Appointments {
    appointments {
      _id
      timeStart
      title
      clinic {
        title
      }
      successInTreatment
      learning
      effectivity
      online
      file
      doctor {
        firstName 
        lastName
        surname 
      } 
      duration
      service {
        priceMax
      }
    }
  }
`;