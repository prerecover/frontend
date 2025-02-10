import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { useClinicRegStore } from '@/shared/store/clinicRegistration';
import { REGEXP_ONLY_DIGITS } from 'input-otp';
import { useEffect, useState } from 'react';

export default function WorkTime() {
  const regStore = useClinicRegStore();
  const [time, setTime] = useState('');
  const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const [workdays, setWorkdays] = useState<string[]>([]);
  const ALIAS = new Map();
  ALIAS.set('Пн', regStore.setMondayTime);
  ALIAS.set('Вт', regStore.setTuesdayTime);
  ALIAS.set('Ср', regStore.setWednesdayTime);
  ALIAS.set('Чт', regStore.setThursdayTime);
  ALIAS.set('Пт', regStore.setFridayTime);
  ALIAS.set('Сб', regStore.setSaturdayTime);
  ALIAS.set('Вс', regStore.setSundayTime);

  const changeDays = (day: string) => {
    const func: React.Dispatch<React.SetStateAction<string>> = ALIAS.get(day);
    if (workdays.includes(day)) {
      func('');
      setWorkdays(
        workdays.filter((workday) => {
          return workday != day;
        })
      );
    } else {
      func(time);
      console.log(regStore.wednesdayTime, regStore.thursdayTime);
      setWorkdays([...workdays, day]);
    }
  };
  useEffect(() => {
    if (workdays) {
      workdays.map((workday) => {
        const func: React.Dispatch<React.SetStateAction<string>> =
          ALIAS.get(workday);
        func(time);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  return (
    <div className="flex">
      <div className="flex-center w-full">
        {days.map((day) => (
          <div
            key={day}
            className={cn(
              'h-[60px] w-[70px] border-solid border-blue-100 border-[1px] flex-center rounded-[1px] p-auto first:rounded-l-[12px] last:rounded-r-[12px] transition transform cursor-pointer',
              workdays.includes(day) && 'bg-blue'
            )}
            onClick={() => changeDays(day)}
          >
            <Text
              className={cn(
                !workdays.includes(day)
                  ? 'font-semibold'
                  : 'text-white font-semibold'
              )}
            >
              {day}
            </Text>
          </div>
        ))}
      </div>
      <div className="flex items-center w-full">
        <Text className="font-semibold text-[16px] ml-[18px] mr-[18px]">с</Text>
        <InputOTP
          maxLength={8}
          pattern={REGEXP_ONLY_DIGITS}
          value={time}
          onChange={(value) => setTime(value)}
        >
          <InputOTPGroup className="gap-[14px]">
            <InputOTPSlot
              index={0}
              className="border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]"
            />
            <InputOTPSlot
              index={1}
              className="border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]"
            />
            <Text className="font-semibold text-[16px]">:</Text>
            <InputOTPSlot
              index={2}
              className="border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]"
            />
            <InputOTPSlot
              index={3}
              className="border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]"
            />
            <Text className="font-semibold text-[16px] mx-[16px]">до</Text>
            <InputOTPSlot
              index={4}
              className="border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]"
            />
            <InputOTPSlot
              index={5}
              className="border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]"
            />
            <Text className="font-semibold text-[16px]">:</Text>
            <InputOTPSlot
              index={6}
              className="border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]"
            />
            <InputOTPSlot
              index={7}
              className="border-blue font-semibold text-[16px] rounded-[12px] h-[47px] w-[43px]"
            />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
}
