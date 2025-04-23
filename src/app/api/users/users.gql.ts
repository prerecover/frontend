import { gql } from "@apollo/client";

export const GETME_QUERY = gql`
    query GetMe {
        getMe {
            detail {
                learning
            }
        }
    }
`;