import {create} from "zustand";

import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";

interface Person {

}

interface Task {
    startDate: Date,
    endDate: Date,
    startTime: string,
    endTime: string,
    title: string,
    description: string,
    members: Person[]
}

interface TaskStore {
    tasks: Task[],
}

export const useTaskStore = create<TaskStore>()(devtools(immer((set) => ({
    tasks: [],
}))))