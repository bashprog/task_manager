import {create} from "zustand";

import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

import {timeFormat} from "../helpers/datesHelper";
import {useDateStore} from './CalendarStore';

interface Person {

}

interface TaskStore {
    tasks: TaskClass[],
    sortedArray: TaskClass[] | [],
    sortedForCalendar: any,
    chosenTask: TaskClass | null,
    selectTaskById: (id: number | string) => void,
    addTask: (task: any) => void,
    sortByDate: (year: number, month: number, day: number) => void,
    sortByMonth: (year: number, month: number) => void,
}

class TaskClass {
    id: number | string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;
    title: string;
    description: string;
    color: string;

    startDateWithTime: Date;
    endDateWithTime: Date;

    startDay: number;
    startMonth: number;
    startYear: number;
    startHours: number;
    startMinutes: number;
    endDay: number;
    endMonth: number;
    endYear: number;
    endHours: number;
    endMinutes: number;

    position: number | null;

    timeDiffInMinutes: number;

    constructor(startDate: string, startTime: string, endDate: string, endTime: string, title: string, description: string, color: string) {
        this.id = Math.random();
        this.startDate = startDate;
        this.startTime = startTime;
        this.endDate = endDate;
        this.endTime = endTime;
        this.title = title;
        this.description = description;
        this.color = color;
        this.position = null;

        this.init();
    }

    init() {
        this.startDateWithTime = new Date(
            parseInt(this.startDate.substring(0, 4)),
            parseInt(this.startDate.substring(5, 7)) - 1,
            parseInt(this.startDate.substring(8, 10)),
            parseInt(this.startTime.substring(0, 2)),
            parseInt(this.startTime.substring(3)),
        );

        this.endDateWithTime = new Date(
            parseInt(this.endDate.substring(0, 4)),
            parseInt(this.endDate.substring(5, 7)) - 1,
            parseInt(this.endDate.substring(8, 10)),
            parseInt(this.endTime.substring(0, 2)),
            parseInt(this.endTime.substring(3)),
        );

        this.startDay = this.startDateWithTime.getDate();
        this.startMonth = this.startDateWithTime.getMonth();
        this.startYear = this.startDateWithTime.getFullYear();
        this.startHours = this.startDateWithTime.getHours();
        this.startMinutes = this.startDateWithTime.getMinutes();

        this.endDay = this.endDateWithTime.getDate();
        this.endMonth = this.endDateWithTime.getMonth();
        this.endYear = this.endDateWithTime.getFullYear();
        this.endHours = this.endDateWithTime.getHours();
        this.endMinutes = this.endDateWithTime.getMinutes();

        this.timeDiffInMinutes = Math.ceil((this.endDateWithTime.getTime() - this.startDateWithTime.getTime())/1000/60)

        this.setPosition(0);
    }

    sortConditions(year: number, month: number, day: number): boolean{
        let startTimer = new Date(this.startYear, this.startMonth, this.startDay).getTime();
        let endTimer = new Date(this.endYear, this.endMonth, this.endDay).getTime();
        let date = new Date(year, month, day).getTime();

        return (startTimer <= date && endTimer >= date);
    }

    getTimeInDay(day: number){
        let startTime = '';
        let endTime = '';

        let date = new Date(this.startYear, this.startMonth, day);

        if (this.sortConditions(this.startYear, this.startMonth, day)) {
            let minsDiffStart = (this.startDateWithTime.getTime() - date.getTime())/1000/60;
            let minsDiffEnd = (this.endDateWithTime.getTime() - date.getTime())/1000/60;

            if (minsDiffStart > 0 && minsDiffStart < 1140) {
                startTime = `${timeFormat(Math.floor(minsDiffStart/60))}:${timeFormat(minsDiffStart%60)}`
            } else {
                startTime = '00:00'
            }

            if (minsDiffEnd > 0 && minsDiffEnd < 1140) {
                endTime = `${timeFormat(Math.floor(minsDiffEnd/60))}:${timeFormat(minsDiffEnd%60)}`
            } else {
                endTime = '23:59'
            }
        }

        let timeDiff = 60*(parseInt(endTime.substring(0,2)) - parseInt(startTime.substring(0,2))) +
            (parseInt(endTime.substring(3)) - parseInt(startTime.substring(3)))

        return [startTime, endTime, timeDiff];
    }

    setPosition(num: number) {
        this.position = num;
    }
}

export const useTaskStore = create<TaskStore>()(devtools(immer((set) => ({
    tasks: [],
    sortedArray: [],
    sortedForCalendar: [],
    chosenTask: null,
    selectTaskById: id => set(state => ({
        chosenTask: state.tasks.filter(el => el.id === id)[0]
    })),
    addTask: task => set(state => {
        state.tasks.push(new TaskClass(task.startDate, task.startTime, task.endDate, task.endTime, task.title, task.description, task.color))
    }),
    sortByDate: (year, month, day) => set(state => ({
        sortedArray: [...state.tasks.filter(el => {
            if (el.sortConditions(year, month, day)) {
                return el;
            }
        })]
    })),
    sortByMonth: (year, month) => set(state => ({
        sortedForCalendar: [... state.tasks.filter(el => el.startYear == year && el.startMonth == month)]
    })),
}))))