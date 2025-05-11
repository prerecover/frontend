import dayjs from 'dayjs';
import 'dayjs/locale/ru';

export const formattedDate = (value: string) => {
  const dateFormatted = dayjs(value, 'YYYY-MM-DD HH:mm:ss', 'ru');
  return {
    date: dateFormatted.format('D MMMM'),
    time: dateFormatted.format('HH:mm'),
  };
};
