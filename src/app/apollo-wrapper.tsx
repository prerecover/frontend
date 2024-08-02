'use client';
import { HttpLink } from '@apollo/client';

import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

function makeClient() {
    const uploadLink = createUploadLink({
        uri: `${process.env.NEXT_PUBLIC_BACKEND}/graphql`,
        headers: { 'Apollo-Require-Preflight': 'true' },
    });
    const httpLink = new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_BACKEND}/graphql`,
        fetchOptions: { cache: 'no-store' },
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: uploadLink,
    });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
