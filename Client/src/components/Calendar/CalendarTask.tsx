import React from "react";

interface IProps {
    color: string,
    title: string
}

const CalendarTask: React.FC<IProps> = ({color, title}) => {
    return(
        <div className={`calendar-task ${color}`}>
            <span>{title}</span>
        </div>
    )
};

export default CalendarTask;