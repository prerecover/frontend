export default function durationParse(duration: number) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    let result: string = '';

    if (hours >= 1) {
        result += `${hours} часов`;
        if (minutes > 0) {
            result += ` ${minutes} минут`;
            return result;
        }
        return result;
    }
    return `${minutes} минут`;
}
