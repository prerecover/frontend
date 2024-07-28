export default function durationParse(duration: number) {
    const minutes = duration % 60;
    const hours = duration / 60;

    if (hours >= 1) {
        return `${hours} часов ${minutes} минут`;
    }
    return `${minutes} минут`;
}
