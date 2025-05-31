export const filterBySearch = (
  search: string,
  searchValues: string[]
): string[] => {
  const searchTerms = search
    .toLowerCase()
    .split(/\s+/)
    .filter((term) => term.trim() !== '');

  return searchValues.filter((value) => {
    const lowerValue = value.toLowerCase();
    return searchTerms.every((term) => lowerValue.includes(term));
  });
};
