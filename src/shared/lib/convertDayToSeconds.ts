/**
 * Преобразует строку в формате "ЧЧ:ММ" в общее количество секунд.
 * @param timeString - строка в формате "ЧЧ:ММ"
 * @returns количество секунд (целое число)
 * @throws Error если формат строки неверен или значения некорректны
 */
const convertTimeToSeconds = (timeString: string): number => {
  const regex = /^(\d{1,2}):(\d{2})$/;
  const match = timeString.match(regex);

  if (!match) {
    throw new Error('Неверный формат времени. Ожидается формат "ЧЧ:ММ"');
  }

  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);

  if (hours < 0 || hours > 23) {
    throw new Error('Часы должны быть в диапазоне от 0 до 23');
  }

  if (minutes < 0 || minutes > 59) {
    throw new Error('Минуты должны быть в диапазоне от 0 до 59');
  }

  return hours * 3600 + minutes * 60;
};
