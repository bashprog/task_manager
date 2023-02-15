const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getDaysInMonth(year: number, month: number) {
    return {startDayName: days[new Date(year, month, 1).getDay()], startDayNum: new Date(year, month, 1).getDay(), totalDays: new Date(year, month+1, 0).getDate()}
}

export function getDateInfo(date: Date) {
    const chosenDate = new Date(date);

    return {
        date: chosenDate,
        day: chosenDate.getDate(),
        dayName: days[chosenDate.getDay()],
        month: chosenDate.getMonth(),
        monthName: months[chosenDate.getMonth()],
        year: chosenDate.getFullYear()
    }
}

export const toISOStringWithTimezone = (date: Date) => {
    const tzOffset = -date.getTimezoneOffset();
    const diff = tzOffset >= 0 ? '+' : '-';
    const pad = (n: number) => `${Math.floor(Math.abs(n))}`.padStart(2, '0');
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        diff + pad(tzOffset / 60) +
        ':' + pad(tzOffset % 60);
};