'use client';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { useBlurStore } from '@/shared/store/blurStore';
import { useSurveyUserWindowStore } from '@/shared/store/surveyWindowUserStore';
import Image from 'next/image';
import QuestionCard from './question-card';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { gql, useMutation } from '@apollo/client';
import { useToast } from '@/components/ui/use-toast';
import { getCookie } from '@/shared/lib/hooks/useCookie';

const SURVEY_COMPELTE = gql(`
mutation CompleteSurvey ($surveyData: [SurveyCompleteInput!]!, $surveyId: String!){
    completeSurvey(
        surveyCompleteInput: $surveyData, surveyId: $surveyId
    ) 
}

`);

export interface SurveyCompleteInput {
    questionTitle: string;
    answerTitle: string;
}

export default function SurveyUserMain() {
    const { setBlur } = useBlurStore();
    const { toast } = useToast();
    const [token, setToken] = useState('');
    const { surveyUserWindowOpen, survey, setSurveyUserWindowOpen } = useSurveyUserWindowStore();
    const [surveyData, setSurveyData] = useState<SurveyCompleteInput[]>([]);
    const [progress, setProgress] = useState('start');

    useEffect(() => {
        setToken(getCookie('access_token') || '');
        if (survey && surveyData.length === survey.questions.length) {
            setProgress('end');
        }
        if (survey && survey.questions.length - surveyData.length >= surveyData.length) {
            setProgress('medium');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [surveyData]);

    const [mutate] = useMutation(SURVEY_COMPELTE, {
        context: { headers: { Authorization: `Bearer ${token}` } },
        onCompleted() {
            location.reload();
        },
    });

    const handleMutate = () => {
        if (surveyData.length !== survey.questions.length) {
            toast({ variant: 'destructive', title: 'Указаны не все ответы!' });
            return;
        }
        mutate({ variables: { surveyData, surveyId: survey._id } });
        setBlur(false);
        setSurveyUserWindowOpen(false);
    };

    const handleClose = () => {
        setBlur(false);
        setSurveyUserWindowOpen(false);
    };
    return (
        <div
            className={cn(
                'flex absolute z-[350] left-[50%] translate-x-[-50%] gap-[20px] mobile:w-full mobile:top-0 mobile:h-screen',
                !surveyUserWindowOpen && 'hidden',
            )}>
            <div className='flex flex-col bg-[#F5F8FC] mobile:w-full desktop:w-[544px] pc:w-[640px] desktop:rounded-[12px] justify-between '>
                <div className='flex flex-col'>
                    <div className='flex-center text-[18px] font-medium mt-[17px] gap-1 '>
                        <Text>Опрос для записи</Text>
                        <Text className='text-blue'>&quot;{survey?.appointment?.title || 'Без названия'}&quot;</Text>
                        <Image
                            src={'/assets/close-i.svg'}
                            width={20}
                            height={20}
                            alt='close'
                            className='absolute right-0 top-0 m-[13px] cursor-pointer desktop:hidden'
                            onClick={() => handleClose()}
                        />
                    </div>
                    {survey?.questions.map((question, i) => (
                        <QuestionCard
                            question={question}
                            key={i}
                            setSurveyData={setSurveyData}
                            surveyData={surveyData}
                        />
                    ))}
                </div>
                <Button className='m-4' onClick={() => handleMutate()}>
                    Отправить
                </Button>
            </div>
            <div className='flex flex-col bg-white mobile:hidden desktop:w-[351px] pc:[380px] rounded-[12px] relative h-[700px]'>
                <Text position='center' className='mt-[17px] text-[18px] font-medium'>
                    Организм изучен на:
                </Text>
                <div
                    className={cn(
                        'w-[90%] flex absolute left-0 right-0 mx-auto items-center gap-3 z-[200] transition-all duration-500 ease-out',
                        progress === 'start' ? 'bottom-14' : progress === 'end' ? 'top-[104px]' : 'top-[304px]',
                    )}>
                    <div className='bg-blue h-[2px] w-full'></div>
                    <Text className='font-semibold text-[15px]'>
                        {progress === 'start' ? '0%' : progress === 'end' ? '100%' : '50%'}
                    </Text>
                </div>
                <Image src={'/assets/skelet.svg'} width={185} height={542} alt='people' className='m-auto opacity-80' />
            </div>
        </div>
    );
}
