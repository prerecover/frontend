import MobileHeader from '@/components/layout/mobileHeader';
import MainPosts from '@/features/MainPosts';
import { getClient } from '@/lib/apollo-client';
import { gql } from '@apollo/client';

export default async function Home() {
    const NEWS_QUERY = gql(`
        query getNews{
            newsAll{
            _id,
            text,
            title,
            like{
                _id
                author{
                    _id
                }
            }
            saved{
                _id
                author{
                    _id
                }
            }
            clinic{
                avatar,
                title
}
            
        }
    }
    `);
    const { data: newsData } = await getClient().query({ query: NEWS_QUERY });

    return (
        <>
            <MobileHeader />
            <div className='p-4 flex flex-col'>
                <MainPosts data={newsData.newsAll} />
            </div>
        </>
    );
}
