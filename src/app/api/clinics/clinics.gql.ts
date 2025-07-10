import { gql } from '@apollo/client';

export const CLINIC_QUERY = gql(`
query Clinic($clinicId: String!){
    clinic(_id: $clinicId) {
        _id
        address
        age
        avatar
        card
        city
        createdAt
        deletedAt
        description
        email
        employees
        isVerfied
        title
        treated
        typeTitle
        updatedAt
                specialization
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
        services {
            _id
            createdAt
            description
            durationMax
            offline
            online
            priceMax
            title
            treated
            updatedAt
            doctors {
                _id
                avatar
                createdAt
                email
                firstName
                lastName
                mainStatus
                number
                online
                surname
                updatedAt
                workExp
                                specialization {
                                    title
                                }
            }
        }
    }
}
`);
