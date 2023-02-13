import React from "react";

import './Calendar.scss';
import CalendarControl from "../CalendarControl/CalendarControl";

const Calendar: React.FC = () => {
    return(
        <section className={'calendar'}>
            <CalendarControl/>
        </section>
    )
};

export default Calendar