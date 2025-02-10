import { Progress } from '@/components/ui/progress';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';

export default function StatisticBlock({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col', className)}>
      <Text className="text-[14px] font-medium mt-3 ">Статистика</Text>
      <div className="rounded-[12px] border-[1px] border-blue-100 p-4 mt-2 gap-4 flex flex-col">
        <div className="flex flex-col gap-2 text-[15px] font-medium">
          <div className="flex-between">
            <Text>Оценка услуги</Text>
            <Text>31%</Text>
          </div>
          <Progress value={31} className="h-[6px]" color="bg-[#009BFF]" />
        </div>
        <div className="flex flex-col gap-2 text-[15px] font-medium">
          <div className="flex-between">
            <Text>Рассчитанная польза услуги</Text>
            <Text>10%</Text>
          </div>
          <Progress value={10} className="h-[6px]" color="bg-[#0064FA]" />
        </div>
        <div className="flex flex-col gap-2 text-[15px] font-medium">
          <div className="flex-between">
            <Text>Полученная польза услуги</Text>
            <Text>10%</Text>
          </div>
          <Progress
            value={10}
            className="h-[6px]"
            color="bg-[#00CC5E]"
            style={{ backgroundColor: '#E5FFF1' }}
          />
        </div>
      </div>
    </div>
  );
}
