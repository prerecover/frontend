import { Text } from '@/components/ui/text';
import { TimeCiel } from '@/components/ui/time-ceil';
import { fullTime } from '@/shared/utils/formatDate';
import Image from 'next/image';

export default function DateCard({
    date,
    ceils,
    dates,
    setDates,
}: {
    date: Date;
    ceils: string[];
    dates: number[];
    setDates: React.Dispatch<React.SetStateAction<number[]>>;
}) {
    const { day, month, year } = fullTime(date);
    console.log(date.toLocaleString());
    const removeDayFromDates = (day: number) => {
        const filteredDates = dates.filter((date) => new Date(date).getDate() !== day);

        setDates(filteredDates);
    };
    return (
        <div className='flex w-[180px] py-4 px-6 rounded-[12px] border-[1px] border-solid border-grey-100 flex-col flex-center relative'>
            <Text className='text-blue text-[16px]'>
                {day}.{month}.{year}
            </Text>
            <div className='flex flex-col justify-center gap-3'>
                {ceils.map((ceil, i) => (
                    <TimeCiel value={ceil} key={i} />
                ))}
            </div>
            <Image
                src={'/assets/close-i.svg'}
                width={20}
                height={20}
                alt='close'
                className='absolute right-0 top-0 m-[13px] cursor-pointer '
                onClick={() => removeDayFromDates(day)}
            />
        </div>
    );
}
