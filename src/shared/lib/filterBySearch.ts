export const filterBySearch = <T>(
  search: string,
  searchValues: T[],
  key?: keyof T
): T[] => {
  const searchTerms = search
    .toLowerCase()
    .split(/\s+/)
    .filter((term) => term.trim() !== '');

  return searchValues.filter((value) => {
    // Если значение — объект и указан ключ, используем значение по этому ключу
    let stringValue: string;
    if (typeof value === 'object' && value !== null && key !== undefined) {
      const keyValue = value[key];
      stringValue = String(keyValue).toLowerCase();
    } else {
      // Иначе приводим значение к строке
      stringValue = String(value).toLowerCase();
    }

    return searchTerms.every((term) => stringValue.includes(term));
  });
};
