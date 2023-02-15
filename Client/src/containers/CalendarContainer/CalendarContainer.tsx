import React, {useEffect} from "react";

import Calendar from "../../components/Calendar/Calendar";

import {getDaysInMonth} from "../../helpers/datesHelper";

import {useDateStore} from "../../stores/CalendarStore";

const CalendarContainer: React.FC = () => {
    const {chosenDate} = useDateStore();
    console.log(chosenDate);
    let obj = getDaysInMonth(chosenDate.getFullYear(), chosenDate.getMonth());
    return(
        <Calendar {... obj}/>
    )
};

export default CalendarContainer;