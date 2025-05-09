import { cn } from '@/lib/utils';

interface IDay {
  label: string;
  value: number;
  isCurrentDay: boolean;
}

interface IActivityItemProps {
  day: IDay;
}

export default function ActivityItem({ day }: IActivityItemProps) {
  return (
    <div
      key={day.label}
      className="flex-1 flex flex-col justify-end items-center"
    >
      <div
        style={{ height: `${day.value}%` }}
        className={cn(
          'bg-history w-16 rounded-lg',
          { 'bg-blue': day.isCurrentDay },
          { 'bg-blue-200': !day.isCurrentDay }
        )}
      />
      <p
        className={cn(
          'text-center font-medium text-sm',
          { 'text-activity': day.isCurrentDay },
          { 'text-activity-foreground': !day.isCurrentDay }
        )}
      >
        {day.isCurrentDay ? 'Сегодня' : day.label}
      </p>
    </div>
  );
}
