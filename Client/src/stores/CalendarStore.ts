import {create} from 'zustand';

import {immer} from "zustand/middleware/immer";

import {devtools} from "zustand/middleware";

import {getDateInfo} from "../helpers/datesHelper";

interface DateStore {
    chosenDate: Date,
    currentYear: number,
    currentMonth: number,
    currentDay: number,
    setDate: (date: Date) => void,
    nextMonth: () => void,
    prevMonth: () => void,
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
        currentYear: state.currentMonth + 1 <= 11 ? state.currentYear : state.currentYear + 1,
        currentMonth: state.currentMonth + 1 <= 11 ? state.currentMonth + 1 : 0,
        chosenDate: state.currentMonth + 1 <= 11 ?
            new Date(state.currentYear, state.currentMonth + 1, state.currentDay) :
            new Date(state.currentYear + 1, 0, state.currentDay)
    })),
    prevMonth: () => set((state) => ({
        currentYear: state.currentMonth - 1 >= 0 ? state.currentYear : state.currentYear - 1,
        currentMonth: state.currentMonth - 1 >= 0 ? state.currentMonth - 1 : 11,
        chosenDate: state.currentMonth - 1 >= 0 ?
            new Date(state.currentYear, state.currentMonth - 1, state.currentDay) :
            new Date(state.currentYear - 1, 11, state.currentDay)
    }))
}))))

