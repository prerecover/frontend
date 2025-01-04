'use client';
import { useAuth } from '@/app/(auth)/auth-wrapper';
import { Text } from '@/components/ui/text';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { useEndMenuModal } from '@/shared/store/endMenuModal';
import { ISaved } from '@/shared/types/saved.interface';
import { gql, useMutation, useQuery } from '@apollo/client';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const SAVED_QUERY = gql(`
query Saved { 
    savedAll {
        _id
        clinic {
            _id
        }
        doctor{
            _id
        }
        service{
            _id
        }
    }
}`);

const SAVE_MUTATION = gql(`
mutation CreateSaved ($input: CreateSavedInput!){
    createSaved(createSavedInput: $input) {
        _id
    }
}
`);

const DELETE_MUTATION = gql(`
mutation DeleteSaved($_id: String!){
    removeSaved(_id: $_id) {
        _id
    }
}

`);

export default function EndMenu({ token }: { token: string | undefined }) {
    const { user } = useAuth();
    const { isOpen, setIsOpen } = useEndMenuModal();
    const pathname = usePathname();
    const url = `pre-recover.com${pathname}`;
    const [savedId, setSavedId] = useState('');
    const { data, loading: loadingData } = useQuery(SAVED_QUERY, {
        context: { headers: { Authorization: `Bearer ${token}` } },
        ssr: true,
    });
    const [mutateSave] = useMutation(SAVE_MUTATION, {
        onCompleted(data) {
            setSavedId(data.createSaved._id);
            // toast({ variant: 'positive', title: 'Сохранено!' });
        },
    });
    const [mutateDelete] = useMutation(DELETE_MUTATION, {
        onCompleted() {
            // toast({ variant: 'warning', title: 'Удалено из сохраненного!' });
        },
    });
    const { toast } = useToast();

    const checkSaved = () => {
        if (!loadingData) {
            const savedAll: ISaved[] = data.savedAll;
            if (pathname.includes('service')) {
                savedAll.map((el) => el.service?._id === pathname.slice(9) && setSavedId(el._id));
            } else if (pathname.includes('clinic')) {
                savedAll.map((el) => el.clinic?._id === pathname.slice(8) && setSavedId(el._id));
            } else {
                savedAll.map((el) => el.doctor?._id === pathname.slice(8) && setSavedId(el._id));
            }
        }
        console.log(savedId);
    };

    const handleSave = () => {
        if (savedId) {
            mutateDelete({ variables: { _id: savedId } });
            setSavedId('');
        } else {
            if (pathname.includes('service')) {
                const serviceId = pathname.slice(9);
                mutateSave({ variables: { input: { serviceId, userId: user._id } } });
            } else if (pathname.includes('clinic')) {
                const clinicId = pathname.slice(8);
                mutateSave({ variables: { input: { clinicId, userId: user._id } } });
            } else {
                const doctorId = pathname.slice(8);
                mutateSave({ variables: { input: { doctorId, userId: user._id } } });
            }
        }
        setIsOpen(false);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => checkSaved(), []);

    return isOpen ? (
        <motion.div
            initial={{ bottom: '-236px' }}
            animate={{ bottom: '0px', transition: { duration: 0.2 } }}
            exit={{ bottom: '-236px' }}
            hidden={!isOpen}
            className={cn(
                'flex flex-col max-h-[236px] bg-white fixed z-[150] bottom-0 desktop:hidden w-full h-full transition-transform duration-500 border-t-[1px] border-t-blue-200',
            )}>
            <div className='h-1/3 flex-center border-b-[1px] border-b-blue-200' onClick={() => handleSave()}>
                <Text>{savedId.length > 1 ? 'Удалить из сохраненного' : 'Сохранить'} </Text>
            </div>
            <div
                className='h-1/3 flex-center border-b-[1px] border-b-blue-200'
                onClick={() => {
                    navigator.clipboard.writeText(url);
                    setIsOpen(false);
                    toast({ title: 'Успешно', variant: 'positive', description: 'Ссылка скопирована в буфер обмена' });
                }}>
                <Text>Копировать ссылку</Text>
            </div>
            <div className='h-1/3 flex-center border-b-[1px] border-b-700' onClick={() => setIsOpen(false)}>
                <Text>Поделиться</Text>
            </div>
        </motion.div>
    ) : (
        <div></div>
    );
}
