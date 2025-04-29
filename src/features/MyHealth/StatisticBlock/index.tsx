import { Text } from '@/components/ui/text';
import Statistic from '@/features/MyHealth/StatisticBlock/Statistic';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';
import type {
  IPeriod,
  IRecordCompleted,
  IStatisticRecord,
} from '../types/statistic.types';
import Card from './Card';

const periodData: IPeriod[] = [
  {
    id: '1',
    value: 'month',
    title: '30 дней',
  },
];

interface IStatisticBlockProps {
  recordCompletedData: IRecordCompleted[];
}

export default function StatisticBlock({
  recordCompletedData,
}: IStatisticBlockProps) {
  const [period, setPeriod] = useState<IPeriod>(periodData[0]);
  const recordsCompleted = 12;
  const successInTreatmentRecords: IStatisticRecord[] = recordCompletedData
    .filter((item) => 'successInTreatment' in item)
    .map((item) => ({
      id: item.id,
      name: item.title,
      value: item.successInTreatment,
    }));

  const effectivenessRecords: IStatisticRecord[] = recordCompletedData
    .filter((item) => 'effectivity' in item)
    .map((item) => ({
      id: item.id,
      name: item.title,
      value: item.effectivity,
    }));
  return (
    <div className="flex flex-col items-start gap-8 bg-white pt-3 pb-6 px-6 rounded-xl w-full flex-1 overflow-hidden min-w-110">
      <div className="flex items-center justify-between w-full">
        <p className="text-gray-700 font-medium text-base w-full">
          Пройдено записей -{' '}
          <span className="text-accent">{recordsCompleted}</span>
        </p>
        <div className="relative">
          <Select
            onValueChange={(e) =>
              setPeriod(periodData.find((el: IPeriod) => el.id === e))
            }
          >
            <SelectTrigger className="border border-blue-200 rounded-xl p-2.5 text-accent text-base h-11 w-28">
              <Text className="text-base text-accent">{period.title}</Text>
              <SelectValue className="text-xl" />
            </SelectTrigger>
            <SelectContent className="bg-white rounded-xl flex flex-col gap-4 !absolute z-50 mt-1 w-[var(--radix-select-trigger-width)]">
              {periodData.map((period: IPeriod) => (
                <SelectItem
                  key={period.id}
                  value={period.id}
                  className="cursor-pointer"
                >
                  {period.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-full px-2">
        <Statistic
          label={'Успех в лечении'}
          recordCompleted={successInTreatmentRecords}
        />
      </div>

      <div className="w-full px-2">
        <Statistic
          label={'Эффективность'}
          recordCompleted={effectivenessRecords}
        />
      </div>
      <div className="flex items-center gap-4 w-full overflow-x-auto">
        {recordCompletedData.length && 
          recordCompletedData.map((item) => (
            <Card key={item.id} record={item} />
          ))
        }
      </div>
    </div>
  );
}
