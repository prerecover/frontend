import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { ISurvey } from '@/shared/types/survey.interface';
import { fullTime } from '@/shared/utils/formatDate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SurveyWarn({ survey }: { survey: ISurvey }) {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const { hours, minutes, day, year, month } = fullTime(new Date(survey.createdAt));
    const title = `${day}.${month}.${year.toString().slice(2, 4)} / ${hours}:${minutes}`;
    console.log(title);
    return (
        <div
            className={cn(
                'bg-blue flex flex-col desktop:max-w-[790px] desktop:mt-4 w-full m-auto  transition-all rounded-[10px] cursor-default ',

                open ? 'h-[195px]' : 'h-[32px]',
            )}>
            <div
                className={cn('bg-blue transition-all flex justify-between rounded-[10px]')}
                onClick={() => setOpen(!open)}>
                {!open ? (
                    <Text
                        type='p'
                        className={cn(
                            'text-white text-[14px] font-medium flex transition-all',
                            open ? 'p-4' : 'px-4 pt-[5px]',
                        )}>
                        Опрос подготовлен к прохождению
                    </Text>
                ) : (
                    <Text type='p' className={'text-white text-[16px] font-medium flex p-4 transition-all'}>
                        Опрос
                    </Text>
                )}
                <Image
                    src={!open ? '/assets/white-arrow-down.svg' : '/assets/white-arrow-up.svg'}
                    width={20}
                    height={20}
                    className={cn('w-[20px] h-[20px] transition-all', open ? 'm-4' : 'mx-4 mt-[5px]')}
                    alt='full'
                />
            </div>
            {open && (
                <div className='flex flex-col px-4 gap-[20px]'>
                    <Text type='p' className='text-[12px] font-medium text-white'>
                        Для лучшего изучения вашего организма наши специалисты придумали способ в виде прохождения
                        опроса последней записи
                    </Text>
                    <Button
                        variant={'outline'}
                        className='text-white border-white'
                        onClick={() => router.push('/appointments')}>
                        Перейти в опрос
                    </Button>
                </div>
            )}
        </div>
    );
}
