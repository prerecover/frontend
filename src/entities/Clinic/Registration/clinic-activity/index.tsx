import { Text } from '@/components/ui/text';
import { Days } from './days';
import WorkTime from './workTime';

export default function ClinicActivity() {
    return (
        <div className='flex'>
            <div className='flex-col flex gap-4 w-full'>
                <Text className='text-[18px] font-medium '>Дни работы*</Text>
                <Days />
            </div>
            <div className='flex-col flex gap-3 w-full ml-10'>
                <Text className='text-[18px] font-medium'>Время работы*</Text>
                <WorkTime />
            </div>
        </div>
    );
}
