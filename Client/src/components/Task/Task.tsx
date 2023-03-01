import React, {useEffect, useState} from "react";

import './Task.scss';

import {useTaskStore} from "../../stores/TaskStore";

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
    position?: number,
    members?: any[],
    getTimeInDay?: string[]
}

const Task: React.FC<IProps> = (props) => {
    const {selectTaskById} = useTaskStore();

    let styles: any = {height: 0, top: 0, left: 55}

    if (props.getTimeInDay) {
        styles.height = props.getTimeInDay[2];
        styles.top = parseInt(props.getTimeInDay[0].substring(0, 2))*60 + parseInt(props.getTimeInDay[0].substring(3));
        if (props.position)
            styles.left = 55 + props.position * 5;
    }

    return (
        <div className={`task ${props.color} ${props.timeDiffInMinutes >= 45 && 'column'}`}
             style={{
                 height: `${styles.height}px`, top: `${styles.top}px`, left: `${styles.left}px`
             }}
             onClick={() => selectTaskById(props.id)}>
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