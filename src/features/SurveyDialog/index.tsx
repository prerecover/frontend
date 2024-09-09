import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useSurveyDialogStore } from '@/shared/store/surveyDialog';
import { useEffect, useState } from 'react';
import SurveyQuestion, { IAnswer } from './question';
import { Button } from '@/components/ui/button';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';

export interface IQuestion {
    text: string;
    answers: IAnswer[];
}

const CREATE_SURVEY = gql(`

mutation CreateSurvey ($surveyInput: SurveyInput!){
    createSurvey(surveyInput: $surveyInput){
        _id
        createdAt
        updatedAt
    }
}
`);

export default function SurveyDialog({ appointmentTitle }: { appointmentTitle: string }) {
    const { showSurveyDialog, setShowSurveyDialog } = useSurveyDialogStore();
    const [count, setCount] = useState([new Date()]);
    const router = useRouter();
    const [fetch, setFetch] = useState(false);
    const [mutate] = useMutation(CREATE_SURVEY, {
        onCompleted() {
            router.replace('/admin/dashboard');
            toast({ variant: 'positive', title: 'Опрос успешно создан' });
        },
    });
    const questions: IQuestion[] = [];
    useEffect(() => {
        if (fetch) {
            mutate({
                variables: {
                    surveyInput: { questions, title: appointmentTitle },
                },
            });
        }
        setFetch(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questions, fetch]);
    const handleReg = () => {
        setFetch(true);
    };
    return (
        <Dialog open={showSurveyDialog} onOpenChange={() => setShowSurveyDialog(!showSurveyDialog)}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent className='bg-white border-blue-100 rounded-[12px] '>
                <DialogHeader>
                    <DialogTitle className='font-medium'>Создание опроса</DialogTitle>
                </DialogHeader>
                <div className='flex flex-col bg-blue-100 px-[40px] rounded-[10px] '>
                    {count.map((_, index) => (
                        <SurveyQuestion pos={index + 1} key={index} fetch={fetch} questions={questions} />
                    ))}
                </div>
                <Button
                    className='w-[300px] mx-auto mt-4'
                    variant={'outline'}
                    onClick={() => setCount([...count, new Date()])}>
                    Добавить вопрос
                </Button>
                <div className='flex gap-4'>
                    <Button className='w-full' onClick={() => handleReg()}>
                        Создать опрос
                    </Button>
                    <Button className='w-full' variant={'outline'}>
                        Добавить в шаблоны
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
