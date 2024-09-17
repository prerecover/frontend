import { Input } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { ISurveyQuestion } from '@/shared/types/survey.interface';

export default function SurveyQuestion({ question, pos }: { question: ISurveyQuestion; pos: number }) {
    return (
        <div className='flex flex-col bg-blue-100 p-6 rounded-[12px]'>
            <Text>Вопрос №{pos + 1}</Text>
            <Input value={question.text} disabled className='mt-2' />
            <Text className='mt-4'>Ответы</Text>
            <div className='flex flex-col gap-4 mt-4'>
                {question.answers?.map((answer) => <Input disabled value={answer.text} key={answer.text} />)}
            </div>
        </div>
    );
}
