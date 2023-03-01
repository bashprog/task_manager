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

    useEffect(() => {
        sortByDate(currentYear, currentMonth, currentDay);
    }, [currentDay, currentMonth, currentYear, tasks]);

    function inTime(startHours: number, startMinutes: number, endHours: number, endMinutes: number, forStartHour: number, forStartMinutes: number) {
        if (forStartHour >= startHours && forStartHour <= endHours) {
            if ((forStartHour > startHours) || (forStartMinutes >= startMinutes && forStartMinutes <= endMinutes)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    function setPositions() {
        let maxPos = 0;
        sortedArray.forEach((el, key) => {
            sortedArray.forEach((val, idx) => {
                console.log(inTime(el.startHours, el.startMinutes, el.endHours, el.endMinutes, val.startHours, val.startMinutes))
                if (idx !== key) {
                    if (inTime(el.startHours, el.startMinutes, el.endHours, el.endMinutes, val.startHours, val.startMinutes) && el.position == val.position) {
                        ++maxPos;
                        val.setPosition(maxPos);
                    }
                }
            })
        })
    }

    setPositions()

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
                            <span className="time-span">{`${timeFormat(key)}:00`}</span>
                        </div>
                    ))}
                    {sortedArray.map((el: any, key: number) => {
                        return <Task {... el} getTimeInDay={el.getTimeInDay(currentDay)} test={key} key={el.id}/>
                    })}
                </div>
            </div>
            <Event {... chosenTask}/>
        </div>
    )
};

export default Aside;