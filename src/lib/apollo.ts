import { ApolloClient, InMemoryCache } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const link = createUploadLink({ uri: `${process.env.NEXT_PUBLIC_BACKEND}/graphql` });

export const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});
