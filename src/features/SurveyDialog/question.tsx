import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { ChangeEvent, useEffect, useState } from 'react';
import { IQuestion } from '.';
import { Button } from '@/components/ui/button';

export interface IAnswer {
    text: string;
}

export default function SurveyQuestion({
    pos,
    questions,
    fetch,
}: {
    pos: number;
    questions: IQuestion[];
    fetch: boolean;
}) {
    const [question, setQuestion] = useState('Как вы себя чувствуете после приема?');
    const [answers, setAnswers] = useState<IAnswer[]>([]);
    const [show, setShow] = useState(true);
    useEffect(() => {
        if (fetch) {
            questions.push({
                text: question,
                answers,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetch]);
    useEffect(() => {
        setAnswers([...answers, { text: 'Отлично' }]);
    }, []);
    useEffect(() => {
        console.log(answers);
    }, [answers]);

    return (
        <div className='flex flex-col mt-[22px]'>
            <Text className='text-[16px] font-normal mb-[14px]'>Вопрос No {pos}</Text>
            <div className={`${show ? 'block' : 'hidden'} transform duration-300 ease-in-out`}>
                <Input
                    value={question}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setQuestion(e.currentTarget.value)}
                    placeholder='Как дела?'
                />
                <Text className='text-[16px] font-normal mt-[18px]'>Готовые ответы</Text>
                <div className='flex flex-col gap-3'>
                    {answers.map((i, index) => (
                        <Input
                            value={`${answers[index].text}`}
                            key={index}
                            onChange={(e) => {
                                const newState = [...answers];
                                newState[index] = { text: e.currentTarget.value };
                                setAnswers(newState);
                            }}
                        />
                    ))}
                    <Input
                        placeholder='Добавить ответ + '
                        className='cursor-pointer'
                        onClick={() => setAnswers([...answers, { text: 'Отлично' }])}
                    />
                </div>
            </div>
        </div>
    );
}
