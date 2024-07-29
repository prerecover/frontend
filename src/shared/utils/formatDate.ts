export const decodeDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('ru-RU', options);
};

export const encodeDate = (date: Date) => {
    return date.getTime();
};
