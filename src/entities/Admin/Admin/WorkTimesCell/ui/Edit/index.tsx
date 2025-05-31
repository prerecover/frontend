'use client';

import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TWorkTimeEdit } from '@/shared/types/Admin/shared/Cells/WorkTime';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { View } from '../View';
import { TimeRangeInputs } from '../TimeRangeInputs';
import { useEffect, useState } from 'react';

interface Props<T extends EnTableTypes>
  extends TCellDataUpdate<T, TWorkTimeEdit> {
  data: TWorkTimeEdit;
}

const daysOfWeek = [
  { key: 'Monday', label: 'Понедельник' },
  { key: 'Tuesday', label: 'Вторник' },
  { key: 'Wednesday', label: 'Среда' },
  { key: 'Thursday', label: 'Четверг' },
  { key: 'Friday', label: 'Пятница' },
  { key: 'Saturday', label: 'Суббота' },
  { key: 'Sunday', label: 'Воскресенье' },
] as const;

export const Edit = <T extends EnTableTypes>({
  data,
  cellIndex,
  updateFunc,
  id,
}: Props<T>) => {
  const [workTime, setWorkTime] = useState<TWorkTimeEdit>(data);

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

  return (
    <Dialog>
      <DialogTrigger asChild>
        <View data={data} />
      </DialogTrigger>
      <DialogContent
        hideCloseButton
        className="py-6 px-5 max-w-[545px] overflow-visible rounded-xl shadow-[0_4px_10px_0_rgba(0,0,0,10%)] border-none"
      >
        <ul className="space-y-4">
          {daysOfWeek.map(({ key, label }) => (
            <li key={key}>
              <p>{label}</p>
              <TimeRangeInputs
                valueFrom={workTime[key] !== null ? workTime[key][0] : null}
                valueTo={workTime[key] !== null ? workTime[key][1] : null}
                onChange={handleTimeChange(key)}
              />
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
