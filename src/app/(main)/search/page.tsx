import { getClient } from "@/lib/apollo-client";
import { gql } from "@apollo/client";

interface Country {
    __typename: string;
    slug?: string;
    title?: string;
}

export default async function Search() {
    const COUNTRY_QUERY = gql(`
        query Countries{
            countries{
            slug,
            title
        }
    }
    `)
    const { data, loading } = await getClient().query({ query: COUNTRY_QUERY })
    const countries: Country[] = data.countries
    if (loading) return <h1>Loading...</h1>
    return (
        <>
            {countries.map(e => (
                <h1 key={e.slug}>{e.slug}</h1>
            ))}
            <h1 className="">asdads</h1>
        </>
    );
}

