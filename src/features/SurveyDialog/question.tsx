import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { ChangeEvent, useEffect, useState } from 'react';
import { IQuestionAnswer, ISurveyQuestion } from '@/shared/types/survey.interface';
import Image from 'next/image';

export default function SurveyQuestion({
    pos,
    questions,
    fetch,
    countList,
    setCountList,
}: {
    pos: number;
    questions: ISurveyQuestion[];
    fetch: boolean;
    countList: Date[];
    setCountList: React.Dispatch<React.SetStateAction<Date[]>>;
}) {
    const [question, setQuestion] = useState('Как вы себя чувствуете после приема?');
    const [answers, setAnswers] = useState<IQuestionAnswer[]>([]);
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        console.log(answers);
    }, [answers]);

    const handleDelete = () => {
        const countEl = countList.at(pos - 1);
        console.log(countEl);
        const copyList = countList.filter((val) => val.getTime() !== countEl?.getTime());
        console.log(copyList);
        setCountList(countList);
    };

    return (
        <div className='flex flex-col mt-[22px] cursor-pointer '>
            <div className='flex-between'>
                <Text className='text-[16px] font-normal mb-[14px]'>Вопрос No {pos}</Text>
                <Image src={'/assets/trash.svg'} width={22} height={22} alt='delete' onClick={() => handleDelete()} />
            </div>

            <div className={` transform duration-300 ease-in-out`}>
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
                        className='cursor-pointer mb-4'
                        onClick={() => setAnswers([...answers, { text: 'Отлично' }])}
                    />
                </div>
            </div>
        </div>
    );
}
