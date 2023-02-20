import React, {useEffect} from "react";

import Calendar from "../../components/Calendar/Calendar";

import {getDaysInMonth} from "../../helpers/datesHelper";

import {useDateStore} from "../../stores/CalendarStore";
import {useTaskStore} from "../../stores/TaskStore";

const CalendarContainer: React.FC = () => {
    const {tasks, sortByMonth} = useTaskStore();
    const {chosenDate, currentMonth, currentYear} = useDateStore();

    useEffect(() => {
        sortByMonth(currentYear, currentMonth);
    }, [tasks])

    let obj = getDaysInMonth(chosenDate.getFullYear(), chosenDate.getMonth());

    return(
        <Calendar {... obj}/>
    )
};

export default CalendarContainer;