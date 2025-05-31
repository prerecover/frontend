'use client';

import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TWorkTimeEdit } from '@/shared/types/Admin/shared/Cells/WorkTime';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { View } from '../View';
import { TimeRangeInputs } from '../TimeRangeInputs';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { DAYS_OF_WEEK } from '../../constants/daysOfWeek';

interface Props<T extends EnTableTypes>
  extends TCellDataUpdate<T, TWorkTimeEdit> {
  data: TWorkTimeEdit;
}

export const Edit = <T extends EnTableTypes>({
  data,
  cellIndex,
  updateFunc,
  id,
}: Props<T>) => {
  const [workTime, setWorkTime] = useState<TWorkTimeEdit>(data);
  const [visibleDays, setVisibleDays] = useState<Record<string, boolean>>(
    Object.fromEntries(DAYS_OF_WEEK.map(({ key }) => [key, data[key] !== null]))
  );

  useEffect(() => {
    setWorkTime(data);

    setVisibleDays(() =>
      Object.fromEntries(
        DAYS_OF_WEEK.map(({ key }) => [key, data[key] !== null])
      )
    );
  }, [data]);

  const debounceUpdate = useDebounce((values: TWorkTimeEdit) => {
    updateFunc({ cellIndex, data: values, id });
  }, 200);

  useEffect(() => {
    debounceUpdate(workTime);
  }, [workTime]);

  const handleTimeChange =
    (dayKey: keyof TWorkTimeEdit) => (values: [number, number]) => {
      setWorkTime((prev) => ({
        ...prev,
        [dayKey]: values,
      }));
    };

  const toggleDay = (dayKey: string) => {
    setVisibleDays((prev) => {
      const newVisibleState = !prev[dayKey];

      if (newVisibleState === false) {
        setWorkTime((prevData) => ({
          ...prevData,
          [dayKey]: null,
        }));
      }

      return {
        ...prev,
        [dayKey]: newVisibleState,
      };
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <View data={data} />
      </DialogTrigger>
      <DialogContent
        hideCloseButton
        className="py-12 px-14 rounded-[40px] max-w-none w-[590px] overflow-visible shadow-[0_4px_10px_0_rgba(0,0,0,10%)] border-none"
      >
        <ul className="space-y-4">
          {DAYS_OF_WEEK.map(({ key, label }) => (
            <li key={key} className="flex justify-between">
              <p
                className={cn(
                  'text-2xl px-4 rounded-2xl flex items-center justify-center cursor-pointer h-[45px] w-[205px] bg-blue-100 text-grey-600 duration-100',
                  {
                    ['bg-blue font-medium text-white']: visibleDays[key],
                  }
                )}
                onClick={() => toggleDay(key)}
              >
                {label}
              </p>

              {visibleDays[key] ? (
                <TimeRangeInputs
                  valueFrom={workTime[key] !== null ? workTime[key][0] : null}
                  valueTo={workTime[key] !== null ? workTime[key][1] : null}
                  onChange={handleTimeChange(key)}
                />
              ) : null}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
