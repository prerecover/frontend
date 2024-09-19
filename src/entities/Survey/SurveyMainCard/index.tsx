import { Text } from '@/components/ui/text';
import { ISurvey } from '@/shared/types/survey.interface';
import { decodeDate } from '@/shared/utils/formatDate';
import Image from 'next/image';
import SurveyQuestion from './question';

export default function SurveyMainCard({ survey }: { survey: ISurvey }) {
    const dateAppointment = decodeDate(new Date(survey?.appointment?.timeStart || 0));
    return (
        <div className='flex flex-col bg-white pt-[20px] px-[24px] rounded-[12px]'>
            <div className='flex-between'>
                <Text className='font-medium text-[20px]'>
                    Опрос для записи &quot;{survey.appointment?.title}&quot;
                </Text>
                <div className='flex gap-[6px] items-center'>
                    <Image src={'/assets/calendar.svg'} width={20} height={20} alt='calendar' />
                    <Text type='h4' className='text-[16px] font-medium'>
                        {dateAppointment}
                    </Text>
                </div>
            </div>
            <div className='flex gap-[6px]'>
                <Text className='text-[16px] text-grey-700 font-medium'>Клиника:</Text>
                <Text className='text-[16px] text-blue font-medium'>{survey.appointment?.clinic.title}</Text>
            </div>
            <div className='flex gap-[6px] mt-2'>
                <Text className='text-[16px] text-grey-700 font-medium'>Клиент:</Text>
                <Text className='text-[16px] text-blue font-medium'>
                    {survey.appointment?.user.lastName} {survey.appointment?.user.firstName}
                </Text>
            </div>
            <div className='my-6 gap-4 flex flex-col'>
                {survey.questions.map((question, pos) => (
                    <SurveyQuestion question={question} pos={pos} key={pos} />
                ))}
            </div>
        </div>
    );
}
