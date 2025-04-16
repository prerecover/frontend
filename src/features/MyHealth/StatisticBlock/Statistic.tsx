import { Text } from '@/components/ui/text';
import type { IStatisticRecord } from '../types/statistic.types';

interface IStatisticProps {
  label: string;
  recordCompleted: IStatisticRecord[];
}

export default function Statistic({ label, recordCompleted }: IStatisticProps) {
  const sumValue = recordCompleted.reduce((acc, current) => acc + current.value, 0);
  
  return (
    <div className="flex flex-col gap-2 text-xl w-full">
      <Text className="text-left font-medium text-base text-[#3C3D3E]">{label}</Text>
      <div className='flex items-center gap-2 w-full'>
        <div className="w-full bg-grey-300 h-5 rounded overflow-hidden flex gap-[1px]">
            {recordCompleted.map(item => 
              <div 
                key={item.id}
                className='h-full'
                style={
                  label === 'Эффективность'
                  ? {backgroundColor: '#009BFF', width: `${item.value}%`}
                  : {backgroundColor : '#0064FA', width: `${item.value}%`}
                }
              ></div>
            )}
        </div>
        <p className='text-[#262626] font-medium text-lg'>{sumValue}%</p>
      </div>
    </div>
  );
}
