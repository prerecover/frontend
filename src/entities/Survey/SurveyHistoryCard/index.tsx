import { Text } from '@/components/ui/text';
import { Characteristics } from '@/entities/Common/characteristics';
import { ISurvey } from '@/shared/types/survey.interface';
import { formatDate } from '@/shared/utils/formatDate';

export default function SurveyHistoryCard({ survey }: { survey: ISurvey }) {
    return (
        <div className={`flex flex-col p-4 bg-white rounded-[12px] border border-solid border-blue-100`}>
            <Text type='h3' className='text-[12px] font-medium '>
                {formatDate(new Date(survey.createdAt))}
            </Text>
            <Text type='h1' className='text-[16px] font-semibold mt-[7px]'>
                Запись &quot;{survey.appointment?.title || 'Без названия'}&quot;
            </Text>
            <Characteristics
                className='gap-3 mt-3'
                data={[
                    {
                        key: 'Организм изучен на:',
                        value: '24%',
                    },
                    { key: 'Отвечено:', value: '12/15' },
                ]}
            />
        </div>
    );
}
