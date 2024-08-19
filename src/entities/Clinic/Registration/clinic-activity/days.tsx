import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { FC, useState } from 'react';

interface DaysI {
    active: string[];
    setActive: React.Dispatch<React.SetStateAction<string[]>>;
}

export const Days: FC<DaysI> = ({ active, setActive }) => {
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const changeDays = (day: string) => {
        if (active.includes(day)) {
            setActive(
                active.filter((workday) => {
                    return workday != day;
                }),
            );
        } else {
            setActive([...active, day]);
        }
    };

    return (
        <div className='flex-center w-full'>
            {days.map((day) => (
                <div
                    key={day}
                    className={cn(
                        'h-[60px] w-[70px] border-solid border-blue-100 border-[1px] flex-center rounded-[1px] p-auto first:rounded-l-[12px] last:rounded-r-[12px] transition transform cursor-pointer',
                        active.includes(day) && 'bg-blue',
                    )}
                    onClick={() => changeDays(day)}>
                    <Text className={cn(!active.includes(day) ? 'font-semibold' : 'text-white font-semibold')}>
                        {day}
                    </Text>
                </div>
            ))}
        </div>
    );
};
