import { LikeIcon } from '@/icons';
import { ILike } from '@/shared/types/like.interface';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { cn } from '@/lib/utils';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { useRouter } from 'next/navigation';
import { gql, useMutation } from '@apollo/client';
import { getCookie } from '@/shared/lib/hooks/useCookie';

const CREATE_LIKE = gql(`
    mutation CreateLike($authorId: String!, $newsId: String!){
        createLike(
            createLikeInput: {
                authorId: $authorId
                newsId: $newsId
            }
    ) {
        _id
    }
}`);

const DELETE_LIKE = gql(`
    mutation RemoveLike ($likeId: String!){
        removeLike(_id: $likeId) {
            _id
    }
}

`);
export default function LikeBtn({ like, newsId }: { like?: ILike; newsId: string }) {
    const { user } = useAuth();
    const [isLike, setIsLike] = useState<boolean>(like ? true : false);
    const [likeId, setLikeId] = useState<string | undefined>(like?._id);
    const [token, setToken] = useState<string | undefined>();
    const [createLike] = useMutation(CREATE_LIKE, {
        context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
        onCompleted(data) {
            setLikeId(data.createLike._id);
        },
    });
    useEffect(() => {
        setToken(getCookie('access_token'));
    }, []);
    const [deleteLike] = useMutation(DELETE_LIKE);
    const router = useRouter();

    const handlePost = () => {
        if (!user?._id) {
            router.push('/login');
            return;
        }
        if (isLike) {
            setIsLike(false);
            deleteLike({ variables: { likeId: likeId } });
        } else {
            setIsLike(true);
            createLike({ variables: { authorId: user._id, newsId: newsId } });
        }
    };
    return (
        <div
            className='w-[38px] h-[38px] flex-center rounded-[12px] bg-blue-100 cursor-pointer slider:w-[40px] slider:h-[40px]'
            onClick={handlePost}>
            <LikeIcon
                className={cn({
                    [styles.likeActive]: isLike,
                })}
            />
        </div>
    );
}
