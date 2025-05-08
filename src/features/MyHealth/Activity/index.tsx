import { EnumLabelsWeekday, IWeekday } from '../types/weekday.types';
import ActivityItem from './ActivityItem';

const weekday: IWeekday[] = [
  {
    monday: 18,
    tuesday: 16,
    wednesday: 14,
    thursday: 20,
    friday: 19,
    saturday: 17,
    sunday: 23,
  },
];

export default function Activity() {
  const date = new Date();
  const currentDayIndex = date.getDay();

  const formattedValue = (value: number) => {
    return (value / 24) * 100;
  };

  const formattedWeekday = weekday
    .map((item) => {
      const days = Object.keys(item) as (keyof IWeekday)[];
      return days.map((day, index) => {
        const label =
          EnumLabelsWeekday[
            day.toUpperCase() as keyof typeof EnumLabelsWeekday
          ];
        const isCurrentDay = index === currentDayIndex;
        return {
          label,
          value: formattedValue(item[day]),
          isCurrentDay,
        };
      });
    })
    .flat();

  return (
    <div className="bg-white p-4 rounded-xl w-full">
      <p className="text-center text-accent font-medium text-lg mb-4">
        Активность на сайте
      </p>
      <div className="flex justify-between h-full w-full gap-2 overflow-x-auto pb-6 min-h-[230px]">
        {formattedWeekday &&
          formattedWeekday.map((day) => (
            <ActivityItem day={day} key={day.label} />
          ))}
      </div>
    </div>
  );
}
