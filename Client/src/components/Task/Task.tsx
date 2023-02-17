import React from "react";

import './Task.scss';

interface IProps {
    id: number | string,
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
    members?: any[]
}

const Task: React.FC<IProps> = (props) => {
    return (
        <div className={`task ${props.color} ${props.timeDiffInMinutes >= 45 && 'column'}`}
             style={{height: `${props.timeDiffInMinutes}px`, top: `${props.startTime.substring(3)}px`}}>
                            <span className="task-time">
                                {props.startTime} - {props.endTime}
                            </span>
            {props.title ?
                <span className="title">
                                    {props.title}
                                </span>
                : null}
        </div>
    )
};

export default Task;