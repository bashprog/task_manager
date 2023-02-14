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