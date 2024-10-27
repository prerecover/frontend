import { Text } from '@/components/ui/text';
import { ISurveyQuestion } from '@/shared/types/survey.interface';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { SurveyCompleteInput } from '.';
import { useEffect, useState } from 'react';

export default function QuestionCard({
    question,
    surveyData,
    setSurveyData,
}: {
    question: ISurveyQuestion;
    surveyData: SurveyCompleteInput[];
    setSurveyData: React.Dispatch<React.SetStateAction<SurveyCompleteInput[]>>;
}) {
    const [questionValue, setQuestionValue] = useState('');

    useEffect(() => {
        const copy = [...surveyData];
        const surveyInput = copy.find((pred) => pred.questionTitle === question.text);
        if (questionValue) {
            if (!surveyInput) {
                setSurveyData([...copy, { answerTitle: questionValue, questionTitle: question.text }]);
            } else {
                const index = copy.findIndex((pred) => pred.questionTitle === question.text);
                copy[index].answerTitle = questionValue;
                setSurveyData(copy);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [questionValue]);

    return (
        <div className='flex flex-col bg-white rounded-[12px] p-6 m-3 gap-4'>
            <Text className='text-[18px] font-medium'>{question.text}</Text>
            <RadioGroup onValueChange={(e) => setQuestionValue(e)}>
                {question.answers.map((answer, i) => (
                    <div className='flex items-center space-x-2' key={i}>
                        <RadioGroupItem value={answer.text} id={answer.text} />
                        <Label htmlFor={answer.text}>{answer.text}</Label>
                    </div>
                ))}
            </RadioGroup>
        </div>
    );
}
