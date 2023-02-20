import React, {useEffect} from "react";

import './Aside.scss';

import {RxCaretLeft, RxCaretRight} from "react-icons/rx";

import placeholder from "../../img/avatar.jpg"

import {useDateStore} from "../../stores/CalendarStore";
import {useTaskStore} from "../../stores/TaskStore";
import {timeFormat, months} from "../../helpers/datesHelper";

import Task from "../Task/Task";
import Event from "../Event/Event";

const Aside: React.FC = () => {
    const {nextDay, prevDay, currentDay, currentMonth, currentYear} = useDateStore();

    const {sortByDate, sortedArray, tasks, chosenTask} = useTaskStore();

    console.log(chosenTask)

    useEffect(() => {
        sortByDate(currentYear, currentMonth, currentDay);
    }, [currentDay, currentMonth, currentYear, tasks]);

    return(
        <div className={'aside'}>
            <div className={'day-box'}>
                <div className={'day-settings flex center'}>
                    <div className={'today'}>
                        <p>{currentDay} {months[currentMonth]}, {currentYear}</p>
                    </div>
                    <div className={'caret-control-aside flex'}>
                        <div className="caret-left btn" onClick={prevDay}>
                            <RxCaretLeft/>
                        </div>
                        <div className={'caret-right btn'} onClick={nextDay}>
                            <RxCaretRight/>
                        </div>
                    </div>
                </div>
                <div className="time">
                    {new Array(24).fill(null).map((el, key) => (
                        <div data-time={`${timeFormat(key)}:00`} key={key}>
                            {sortedArray.map((el: any) => (
                                el.startTime.substring(0,2) == timeFormat(key) ?
                                    <Task {... el} key={el.id} maxHeight={(24-key)*60}/>
                                : null
                            ))}
                            <span className="time-span">{`${timeFormat(key)}:00`}</span>
                        </div>
                    ))}
                </div>
            </div>
            <Event {... chosenTask}/>
        </div>
    )
};

export default Aside;