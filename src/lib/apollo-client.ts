import { HttpLink } from "@apollo/client";
import {
    registerApolloClient,
    ApolloClient,
    InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { cookies } from "next/headers";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
    const token = cookies().get('access_token')?.value
    return new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: "http://localhost:3000/graphql",
            headers: {
                Authorization: token ? `Bearer ${token}` : ""
            },
            credentials: "same-origin",
        }),
    });
});
