import MobileHeader from '@/components/layout/mobileHeader';
import PostMain from '@/entities/Post/PostMain';
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
            newsVideos {
                _id
                video
            }
            newsImages {
                _id
                image
            }

            
        }
    }
    `);
    const { data: newsData } = await getClient().query({ query: NEWS_QUERY });

    return (
        <>
            <MobileHeader />
            <div className='p-4 flex flex-col'>
                <PostMain data={newsData.newsAll} />
            </div>
        </>
    );
}
