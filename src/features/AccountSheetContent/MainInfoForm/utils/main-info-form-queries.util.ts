import { gql } from '@apollo/client';

export const CHANGE_ME_MUTATION = gql(`
        mutation ChangeMe(
            $changeInput: UpdateUserInput!
){
            changeMe(changeMeInput: $changeInput){
        _id
        userId
        address
        avatar
        birthday
        email
        city
        country{
            _id
            title 
        }
        firstName
        lastName
        login
        number
        sex
        surname
        }
    }
`);

export const GET_COUNTRIES = gql(`
query Countries {
    countries {
        _id
        slug
        title
    }
}
`);
