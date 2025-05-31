/**
 * Преобразует количество секунд в строку в формате ЧЧ:ММ (24-часовой формат)
 * @param totalSeconds - общее количество секунд (целое положительное число)
 * @returns строка в формате "ЧЧ:ММ"
 * @throws Error если totalSeconds отрицательное или превышает 86400 (24 часа)
 */
export const convertSecondsToDay = (totalSeconds: number): string => {
  if (totalSeconds < 0) {
    throw new Error('Количество секунд не может быть отрицательным');
  }

  if (totalSeconds > 86400) {
    throw new Error('Количество секунд не может превышать 86400 (24 часа)');
  }

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const pad = (num: number): string => num.toString().padStart(2, '0');

  return `${pad(hours)}:${pad(minutes)}`;
};
