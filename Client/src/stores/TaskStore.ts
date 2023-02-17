import {create} from "zustand";

import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

interface Person {

}

interface Task {
    id: number,
    startDate: string,
    startYear: number,
    startMonth: number,
    startDay: number,
    endDate: string,
    endYear: number,
    endMonth: number,
    endDay: number,
    startTime: string,
    endTime: string,
    title: string,
    description: string,
    color: string,
    timeDiffInMinutes: number,
    members?: Person[]
}

interface TaskStore {
    tasks: Task[],
    sortedArray: Task[] | [],
    addTask: (task: Task) => void,
    sortByDate: (year: number, month: number, day: number) => void
}

export const useTaskStore = create<TaskStore>()(devtools(immer((set) => ({
    tasks: [],
    sortedArray: [],
    addTask: task => set(state => {
        state.tasks.push(task)
    }),
    sortByDate: (year, month, day) => set(state => ({
        sortedArray: [... state.tasks.filter(el => {
            if (el.startYear == year && el.startMonth == month && el.startDay == day) {
                return el;
            }
        })]
    }))
}))))