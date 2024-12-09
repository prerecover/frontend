import { Text } from '@/components/ui/text';
import { Days } from './days';
import WorkTime from './workTime';
import { useState } from 'react';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { Button } from '@/components/ui/button';

export default function ClinicActivity() {
    const [count, setCount] = useState(['']);
    const { wednesdayTime, thursdayTime } = useClinicRegStore();
    return (
        <div className='flex flex-col'>
            <div className='flex-col flex gap-4 w-full'>
                <Text className='text-[18px] font-medium '>Дни и время работы</Text>
            </div>
            <div className='flex flex-col gap-7 mt-4'>
                {count.map((el, i) => (
                    <WorkTime key={i} />
                ))}
                <Text
                    position='center'
                    className='text-blue mb-4 cursor-pointer font-medium text-[18px] hover:opacity-60'
                    onClick={() => setCount([...count, ''])}>
                    + Добавить время работы
                </Text>
                <Button onClick={() => console.log(`Среда - ${wednesdayTime}, Thursday - ${thursdayTime}`)}>
                    click
                </Button>
            </div>
        </div>
    );
}
