'use client';

import { EnTableTypes } from '@/segments/Admin/MainTable';
import { TCellDataUpdate } from '@/shared/types/Admin/shared/Utils/CellDataUpdate';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TWorkTimeAdd } from '@/shared/types/Admin/shared/Cells/WorkTime';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { View } from '../View';
import { TimeRangeInputs } from '../TimeRangeInputs';
import { useEffect, useState } from 'react';

interface Props<T extends EnTableTypes>
  extends TCellDataUpdate<T, TWorkTimeAdd> {
  data: TWorkTimeAdd;
}

const daysOfWeek = [
  { key: 'Monday', label: 'Понедельник' },
  { key: 'Tuesday', label: 'Вторник' },
  { key: 'Wednesday', label: 'Среда' },
  { key: 'Thursday', label: 'Четверг' },
  { key: 'Friday', label: 'Пятница' },
  { key: 'Saturday', label: 'Суббота' }, // Заменено: было Saturday -> Weekday
  { key: 'Sunday', label: 'Воскресенье' },
] as const;

export const Add = <T extends EnTableTypes>({
  data,
  cellIndex,
  updateFunc,
  id,
}: Props<T>) => {
  // Единое состояние для всех дней
  const [workTime, setWorkTime] = useState<TWorkTimeAdd>(data);
  console.log(workTime);

  const debounceUpdate = useDebounce((values: TWorkTimeAdd) => {
    updateFunc({ cellIndex, data: values, id });
  }, 200);

  // Отправляем обновлённые данные
  useEffect(() => {
    debounceUpdate(workTime);
  }, [workTime]);

  // Обработчик изменения времени для любого дня
  const handleTimeChange =
    (dayKey: keyof TWorkTimeAdd) => (values: [number, number]) => {
      setWorkTime((prev) => ({
        ...prev,
        [dayKey]: values,
      }));
    };

  return (
    <Dialog>
      <DialogTrigger>
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
                onChange={(e) => {
                  console.log(e);
                }}
                // onChange={handleTimeChange(key)}
              />
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};
