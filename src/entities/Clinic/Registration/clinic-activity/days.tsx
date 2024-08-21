import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { FC } from 'react';

export const Days: FC = () => {
    const { workdays, setWorkdays } = useClinicRegStore();
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const changeDays = (day: string) => {
        if (workdays.includes(day)) {
            setWorkdays(
                workdays.filter((workday) => {
                    return workday != day;
                }),
            );
        } else {
            setWorkdays([...workdays, day]);
        }
    };

    return (
        <div className='flex-center w-full'>
            {days.map((day) => (
                <div
                    key={day}
                    className={cn(
                        'h-[60px] w-[70px] border-solid border-blue-100 border-[1px] flex-center rounded-[1px] p-auto first:rounded-l-[12px] last:rounded-r-[12px] transition transform cursor-pointer',
                        workdays.includes(day) && 'bg-blue',
                    )}
                    onClick={() => changeDays(day)}>
                    <Text className={cn(!workdays.includes(day) ? 'font-semibold' : 'text-white font-semibold')}>
                        {day}
                    </Text>
                </div>
            ))}
        </div>
    );
};
