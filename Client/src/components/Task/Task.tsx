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
    members?: any[],
    getTimeInDay?: string[]
    
}

const Task: React.FC<IProps> = (props) => {
    const {selectTaskById} = useTaskStore();
    const [styles, changeStyles] = useState<any>({height: 0, top: 0, left: 0})

    useEffect(() => {
        if (props.getTimeInDay && props.getTimeInDay[0] != '') {
            changeStyles({
                height: props.getTimeInDay[2],
                top: parseInt(props.getTimeInDay[0].substring(0, 2))*60 + parseInt(props.getTimeInDay[0].substring(3)),
                left: 0
            })
        }
    }, [props])

    console.log(styles);

    return (
        <div className={`task ${props.color} ${props.timeDiffInMinutes >= 45 && 'column'}`}
             style={{
                 height: `${styles.height}px`, top: `${styles.top}px`,
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