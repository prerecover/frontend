import { FC, useEffect, useState } from 'react';

import { Text } from './text';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useAuth } from '@/app/(auth)/auth-wrapper';

export const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];
export const decreasingMonths = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
];
export const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
export const fullDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

interface ICalendare {
    width?: string;
    height?: string;
    isAccount?: boolean;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    borderColor?: string;
}
export const Calendar: FC<ICalendare> = ({ width, height, borderColor, setDate, isAccount }) => {
    const { user } = useAuth();
    const currentDate: Date = !isAccount
        ? new Date()
        : user.birthday
          ? new Date(user.birthday)
          : new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
    const [currentMonth, setCurrentMonth] = useState<number>(currentDate.getMonth());
    const [currentYear, setCurrentYear] = useState<number>(currentDate.getFullYear());
    const [currentDay, setCurrentDay] = useState<string>(currentDate.getDate().toString());
    const today = currentDate.getDate().toString();

    const handlePreviousMonth = () => {
        if (currentMonth === 1) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
            setDate(
                `${currentYear}-${currentMonth + 1 < 10 ? '0' : ''}${currentMonth + 1}-${zeroDays.includes(currentDay) ? '0' : ''}${currentDay}`,
            );
        } else {
            setCurrentMonth(currentMonth - 1);
            setDate(
                `${currentYear}-${currentMonth + 1 < 10 ? '0' : ''}${currentMonth + 1}-${zeroDays.includes(currentDay) ? '0' : ''}${currentDay}`,
            );
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
            console.log(currentMonth);
            setDate(
                `${currentYear}-${currentMonth + 1 < 10 ? '0' : ''}${currentMonth + 1}-${zeroDays.includes(currentDay) ? '0' : ''}${currentDay}`,
            );
        } else {
            setCurrentMonth(currentMonth + 1);
            setDate(
                `${currentYear}-${currentMonth + 1 < 10 ? '0' : ''}${currentMonth + 1}-${zeroDays.includes(currentDay) ? '0' : ''}${currentDay}`,
            );
        }
    };

    const zeroDays = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const handleSelectedDay = (day: string) => {
        if (day === undefined) return;

        setCurrentDay(day);
        console.log(day);
        setDate(
            `${currentYear}-${currentMonth + 1 < 10 ? '0' : ''}${currentMonth + 1}-${zeroDays.includes(day) ? '0' : ''}${day}`,
        );
        console.log();
    };
    useEffect(() => {
        console.log('rerender');
        setDate(
            `${currentYear}-${currentMonth + 1 < 10 ? '0' : ''}${currentMonth + 1}-${zeroDays.includes(currentDay) ? '0' : ''}${currentDay}`,
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getDaysInMonth = (year: number, month: number): (string | undefined)[] => {
        const startDate = new Date(year, month, 1);
        const endDate = new Date(year, month + 1, 0);
        const days: (string | undefined)[] = [];

        for (let i = 0; i < startDate.getDay() - 1; i++) {
            days.push(undefined);
        }

        for (let day = 1; day <= endDate.getDate(); day++) {
            days.push(day.toString());
        }

        const lastDayOfWeek = 7;
        const remainingEmptyDays = (lastDayOfWeek - endDate.getDay()) % 7;

        for (let i = 0; i < remainingEmptyDays; i++) {
            days.push(undefined);
        }

        return days;
    };

    const daysInMonth = getDaysInMonth(currentYear, currentMonth);

    return (
        <div
            className='max-w-full bg-white rounded-[16px] p-7 h-max'
            style={{
                width,
                height,
                borderColor: borderColor || '',
            }}>
            <div className='flex-between'>
                <div className='flex items-center font-semibold'>
                    <Text type='h2'>{months[currentMonth]}</Text>
                    &nbsp;
                    <Text type='h2'>{currentYear}</Text>
                </div>
                <div className='flex items-center gap-4'>
                    <Image
                        src='/assets/arrow-left.svg'
                        alt='left'
                        className='w-7 h-8'
                        onClick={() => handlePreviousMonth()}
                        width={25}
                        height={25}
                    />
                    <Image
                        src='/assets/arrow-right.svg'
                        className='w-7 h-8'
                        alt='right'
                        onClick={() => handleNextMonth()}
                        width={25}
                        height={25}
                    />
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='grid grid-cols-7 items-center justify-between mt-[20px]'>
                    {days.map((item) => (
                        <Text type='p' key={item} className='text-dark flex-center font-medium text-center text-[16px]'>
                            {item}
                        </Text>
                    ))}
                </div>
                <ul className='grid grid-cols-7 justify-between items-center mt-4 gap-2'>
                    {daysInMonth.map((day, i) => (
                        <li
                            style={day === undefined ? { cursor: '' } : { cursor: 'pointer' }}
                            className={cn(
                                today == day &&
                                    currentMonth == new Date().getMonth() &&
                                    'border-blue border-solid border-[2px] rounded-[12px] text-blue font-medium',
                                'w-[40px] h-[40px] flex-center m-auto',
                                currentDay == day && 'bg-blue rounded-[12px] text-white',
                            )}
                            key={i}
                            onClick={() => handleSelectedDay(day || '')}>
                            {day}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
