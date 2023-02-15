import {create} from 'zustand';

import {immer} from "zustand/middleware/immer";

import {devtools} from "zustand/middleware";

import {getDateInfo, getDaysInMonth} from "../helpers/datesHelper";

interface DateStore {
    chosenDate: Date,
    currentYear: number,
    currentMonth: number,
    currentDay: number,
    setDate: (date: Date) => void,
    nextMonth: () => void,
    prevMonth: () => void,
    nextDay: () => void,
    prevDay: () => void,
    setDay: (num: number) => void,
}

export const useDateStore = create<DateStore>()(devtools(immer((set) => ({
    chosenDate: new Date(),
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
    currentDay: new Date().getDate(),
    setDate: date => set(() => ({
        chosenDate: date,
        currentYear: date.getFullYear(),
        currentMonth: date.getMonth(),
        currentDay: date.getDate()
    })),
    nextMonth: () => set((state) => ({
        currentDay: 1,
        currentYear: state.currentMonth + 1 <= 11 ? state.currentYear : state.currentYear + 1,
        currentMonth: state.currentMonth + 1 <= 11 ? state.currentMonth + 1 : 0,
        chosenDate: state.currentMonth + 1 <= 11 ?
            new Date(state.currentYear, state.currentMonth + 1, 1) :
            new Date(state.currentYear + 1, 0, 1)
    })),
    prevMonth: () => set((state) => ({
        currentDay: getDaysInMonth(state.currentYear, state.currentMonth - 1).totalDays,
        currentYear: state.currentMonth - 1 >= 0 ? state.currentYear : state.currentYear - 1,
        currentMonth: state.currentMonth - 1 >= 0 ? state.currentMonth - 1 : 11,
        chosenDate: state.currentMonth - 1 >= 0 ?
            new Date(state.currentYear, state.currentMonth - 1,  getDaysInMonth(state.currentYear, state.currentMonth - 1).totalDays) :
            new Date(state.currentYear - 1, 11,  getDaysInMonth(state.currentYear -1 , 11).totalDays)
    })),
    nextDay: () => set((state) => ({
        currentDay: state.currentDay + 1 <= getDaysInMonth(state.currentYear, state.currentMonth).totalDays ? state.currentDay + 1 : (function () {
            state.nextMonth();
            return 1;
        })(),
        chosenDate: new Date(state.chosenDate.setDate(state.chosenDate.getDate() + 1))
    })),
    prevDay: () => set((state) => ({
        currentDay: state.currentDay - 1 >= 1 ? state.currentDay - 1 : (function(){
            state.prevMonth();
            return getDaysInMonth(state.currentYear, state.currentMonth - 1).totalDays
        })(),
        chosenDate: new Date(state.chosenDate.setDate(state.chosenDate.getDate() - 1))
    })),
    setDay: (num) => set((state) => ({
        currentDay: num,
        chosenDate: new Date(state.currentYear, state.currentMonth, num)
    }))
}))))

