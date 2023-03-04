export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

export const timeFormat = (str: any) => {
    if (str < 10) {
        str = `0${str}`
    }

    return `${str}`;
}



export function setPositions(array: any, chosenDay: number) {
    console.log('setPositions');
    let maxPos = 0;
    array.forEach((el: any, key: number) => {
        array.forEach((val: any, idx: number) => {
            if (idx !== key) {
                if (f(el, val) && el.position == val.position) {
                    ++maxPos;
                    val.setPosition(maxPos);
                }
            }
        })
    })

    let a = t(array, chosenDay);
    if (a)
        setPositions(array, chosenDay);
}

function t(array: any, chosenDay: number) {
    console.log('t');
    let pos = 0;
    let returner = false;
    array.forEach((el: any, key: number) => {
        array.forEach((val: any, idx: number) => {
            if (idx !== key) {
                if (el.position < val.position && el.getTimeInDay(chosenDay)[2] > val.getTimeInDay(chosenDay)[2]) {
                    pos = el.position;
                    el.position = val.position;
                    val.position = pos;
                    returner = true;
                }
            }
        })
    })

    return returner;
}

function f(el: any, cel: any) {
    console.log('f');
    //cel = compared element

    let sh = el.startHours;
    let sm = el.startMinutes;
    let eh = el.endHours;
    let em = el.endMinutes;

    let csh = cel.startHours;
    let csm = cel.startMinutes;
    let ceh = cel.endHours;
    let cem = cel.endMinutes;

    if (sh <= csh && eh >= csh) {
        return (sh < csh) || (eh < ceh) || (sh == csh && sm <= csm) || (eh == ceh && em > cem);
    } else  {
        return false;
    }
}

function inTime(sh: number, sm: number, eh: number, em: number, csh: number, csm: number) {
    // if (forStartHour >= startHours && forStartHour <= endHours) {
    //     if ((forStartHour > startHours) || (forStartMinutes >= startMinutes && forStartMinutes <= endMinutes)) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // } else {
    //     return false;
    // }
}