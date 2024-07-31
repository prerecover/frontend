import { useAuth } from '@/app/(auth)/auth-wrapper';
import { SaveIcon } from '@/icons';
import { cn } from '@/lib/utils';
import { ISaved } from '@/shared/types/saved.interface';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { getCookie } from '@/shared/lib/hooks/useCookie';

const CREATE_SAVED = gql(`
    mutation CreateSaved($authorId: String!, $newsId: String!){
        createSaved(
            createSavedInput: {
                authorId: $authorId
                newsId: $newsId
            }
    ) {
        _id
    }
}`);

const DELETE_SAVED = gql(`
    mutation RemoveSaved ($savedId: String!){
        removeSaved(_id: $savedId) {
            _id
    }
}
`);

export default function SavedBtn({ saved, newsId }: { saved?: ISaved; newsId: string }) {
    const { user } = useAuth();
    const [token, setToken] = useState<string | undefined>();
    const [isSaved, setIsSaved] = useState<boolean>(saved ? true : false);
    const [savedId, setSaveId] = useState<string | undefined>(saved?._id);
    const [createSaved] = useMutation(CREATE_SAVED, {
        context: { headers: { Authorization: token ? `Bearer ${token}` : '' } },
        onCompleted(data) {
            setSaveId(data.createSaved._id);
        },
    });
    useEffect(() => {
        setToken(getCookie('access_token'));
    }, []);
    const [deleteSaved] = useMutation(DELETE_SAVED);
    const router = useRouter();
    const handlePost = () => {
        if (!user?._id) {
            router.push('/login');
        }
        if (isSaved) {
            setIsSaved(false);
            deleteSaved({ variables: { savedId: savedId } });
        } else {
            setIsSaved(true);
            createSaved({ variables: { authorId: user?._id, newsId: newsId } });
        }
    };
    return (
        <div
            className='w-[38px] h-[38px] flex-center rounded-[12px] bg-blue-100 cursor-pointer slider:w-[40px] slider:h-[40px]'
            onClick={handlePost}>
            <SaveIcon
                className={cn({
                    [styles.saveActive]: isSaved,
                })}
            />
        </div>
    );
}
