import { EnumLabelsWeekday, IWeekday } from '../types/weekday.types';

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

  const formattedValue = (v: number) => {
    return (v / 24) * 100;
  };

  const formattedWeekday = weekday
    .map((item) => {
      const days = Object.keys(item) as (keyof IWeekday)[];
      return days.map((day, index) => {
        const label = EnumLabelsWeekday[day as keyof typeof EnumLabelsWeekday];
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
    <div className="bg-white p-4 rounded-xl w-full pb-10">
      <p className="text-center text-[#262626] font-medium text-lg mb-4">
        Активность на сайте
      </p>
      <div className="flex justify-between h-full w-full gap-2 overflow-x-auto pb-6 min-h-[230px]">
        {formattedWeekday &&
          formattedWeekday.map((day) => (
            <div
              key={day.label}
              className="flex-1 flex flex-col justify-end items-center"
            >
              <div
                className="bg-[#C8DBF6] w-16 rounded-lg"
                style={{
                  backgroundColor: day.isCurrentDay ? '#0064FA' : '#C8DBF6',
                  height: `${day.value}%`,
                }}
              />
              <p
                className="text-center font-medium text-sm"
                style={
                  day.isCurrentDay ? { color: '#262626' } : { color: '#787B86' }
                }
              >
                {day.isCurrentDay ? 'Сегодня' : day.label}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
