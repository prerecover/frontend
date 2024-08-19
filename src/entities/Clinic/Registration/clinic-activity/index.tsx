import { Text } from '@/components/ui/text';
import { Days } from './days';
import { useState } from 'react';
import WorkTime from './workTime';

export default function ClinicActivity({
    active,
    setActive,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
}: {
    endTime: string;
    setEndTime: React.Dispatch<React.SetStateAction<string>>;
    startTime: string;
    setStartTime: React.Dispatch<React.SetStateAction<string>>;
    active: string[];
    setActive: React.Dispatch<React.SetStateAction<string[]>>;
}) {
    return (
        <div className='flex'>
            <div className='flex-col flex gap-4 w-full'>
                <Text className='text-[18px] font-medium '>Дни работы*</Text>
                <Days active={active} setActive={setActive} />
            </div>
            <div className='flex-col flex gap-3 w-full ml-10'>
                <Text className='text-[18px] font-medium'>Время работы*</Text>
                <WorkTime startTime={startTime} endTime={endTime} setStartTime={setStartTime} setEndTime={setEndTime} />

            </div>
        </div>
    );
}
