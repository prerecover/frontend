import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useSurveyDialogStore } from '@/shared/store/surveyDialog';
import { useEffect, useState } from 'react';
import SurveyQuestion from './question';
import { Button } from '@/components/ui/button';
import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { IAppointment } from '@/shared/types/appointment.interface';
import { ISurveyQuestion } from '@/shared/types/survey.interface';
import { useBlurStore } from '@/shared/store/blurStore';

const CREATE_SURVEY = gql(`

mutation CreateSurvey ($surveyInput: SurveyInput!){
    createSurvey(surveyInput: $surveyInput){
        _id
        createdAt
        updatedAt
    }
}
`);

export default function SurveyDialog({ appointment }: { appointment: IAppointment }) {
    const { showSurveyDialog, setShowSurveyDialog } = useSurveyDialogStore();
    const [count, setCount] = useState([new Date()]);
    const { setBlur } = useBlurStore();
    const router = useRouter();
    const [fetch, setFetch] = useState(false);
    const [mutate] = useMutation(CREATE_SURVEY, {
        onCompleted() {
            setBlur(false);
            router.replace('/admin/dashboard');
            toast({ variant: 'positive', title: 'Опрос успешно создан' });
        },
    });

    const handleChangeOpen = () => {
        setBlur(false);
        setShowSurveyDialog(!showSurveyDialog);
    };
    const questions: ISurveyQuestion[] = [];
    useEffect(() => {
        console.log(fetch);
        if (fetch) {
            mutate({
                variables: {
                    surveyInput: { questions, title: appointment.title },
                },
            });
        }
        setFetch(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questions, fetch]);
    const handleReg = () => {
        setFetch(true);
        appointment.surveys.push({ questions, _id: '123', createdAt: 1080, updatedAt: 1090 });
    };
    return (
        <Dialog open={showSurveyDialog} onOpenChange={() => handleChangeOpen()}>
            {/* <DialogTrigger>Open</DialogTrigger> */}
            <DialogContent className='bg-white border-blue-100 rounded-[12px] fixed z-[200] right-0 min-w-[850px]'>
                <DialogHeader>
                    <DialogTitle className='font-medium'>Создание опроса</DialogTitle>
                </DialogHeader>
                <div className='flex flex-col bg-blue-100 px-[40px] rounded-[10px] '>
                    {count.map((_, index) => (
                        <SurveyQuestion
                            pos={index + 1}
                            key={index}
                            fetch={fetch}
                            questions={questions}
                            countList={count}
                            setCountList={setCount}
                        />
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
