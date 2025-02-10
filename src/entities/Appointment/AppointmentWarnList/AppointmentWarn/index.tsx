import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { IAppointment } from '@/shared/types/appointment.interface';
import { fullTime } from '@/shared/utils/formatDate';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AppointmentWarn({
  appointment,
}: {
  appointment: IAppointment;
}) {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const { hours, minutes, day, year, month } = fullTime(
    new Date(appointment.timeStart)
  );
  const title = `${day}.${month}.${year.toString().slice(2, 4)} / ${hours}:${minutes}`;
  return (
    <div
      className={cn(
        'bg-yellow-400 flex flex-col desktop:max-w-[790px] desktop:mt-4 w-full m-auto  transition-all rounded-[10px] cursor-default ',

        open ? 'h-[195px]' : 'h-[32px]'
      )}
    >
      <div
        className={cn(
          'bg-yellow-400 transition-all flex justify-between rounded-[10px]'
        )}
        onClick={() => setOpen(!open)}
      >
        {!open ? (
          <Text
            type="p"
            className={cn(
              'text-[14px] font-medium flex transition-all',
              open ? 'p-4' : 'px-4 pt-[5px]'
            )}
          >
            Выберите другое время
          </Text>
        ) : (
          <Text
            type="p"
            className={'text-[16px] font-medium flex p-4 transition-all'}
          >
            Выберите другое время
          </Text>
        )}
        <Image
          src={
            !open
              ? '/assets/black-arrow-down.svg'
              : '/assets/black-arrow-up.svg'
          }
          width={20}
          height={20}
          className={cn(
            'w-[20px] h-[20px] transition-all',
            open ? 'm-4' : 'mx-4 mt-[5px]'
          )}
          alt="full"
        />
      </div>
      {open && (
        <div className="flex flex-col px-4 gap-[20px]">
          <Text type="p" className="text-[16px] font-medium ">
            &quot;{appointment.title || 'Без названия'}&quot; {title}
          </Text>
          <Text className="font-medium">
            Запись на это время занята, выберите другое доступное время
          </Text>
          <Button
            variant={'outline'}
            className="border-dark text-dark"
            onClick={() => router.push('/appointments')}
          >
            Перенести
          </Button>
        </div>
      )}
    </div>
  );
}
