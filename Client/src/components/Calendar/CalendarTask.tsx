import React from "react";

const CalendarTask: React.FC<any> = ({props}) => {
    console.log(props);
    return(
        <div className={`calendar-task ${props.color}`}>
            <span>{props.title}</span>
        </div>
    )
};

export default CalendarTask;