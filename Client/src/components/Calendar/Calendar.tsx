import React, {useEffect} from "react";

import './Calendar.scss';

import CalendarControl from "../CalendarControl/CalendarControl";

import {useDateStore} from "../../stores/CalendarStore";
import {useTaskStore} from "../../stores/TaskStore";
import CalendarTask from "./CalendarTask";

interface IProps {
    startDayName: string,
    totalDays: number,
    startDayNum: number
}

const Calendar: React.FC<IProps> = ({totalDays, startDayNum}) => {
    const {setDay, currentDay} = useDateStore();
    const {sortedForCalendar} = useTaskStore();

    console.log(sortedForCalendar);

    return (
        <section className={'calendar'}>
            <CalendarControl/>
            <div className={'calendar-box'}>
                <div className={'calendar-days'}>
                    <span>
                        Sunday
                    </span>
                    <span>
                        Monday
                    </span>
                    <span>
                        Tuesday
                    </span>
                    <span>
                        Wednesday
                    </span>
                    <span>
                        Thursday
                    </span>
                    <span>
                        Friday
                    </span>
                    <span>
                        Saturday
                    </span>
                </div>
                <div className="calendar-nums">
                    {new Array(42).fill(null).map((el, key) => (
                        (startDayNum <= key) && (totalDays >= (key - startDayNum + 1)) ?
                            <div data-day={key - startDayNum + 1} key={key}
                                 className={`this-month ${key - startDayNum + 1 == currentDay ? 'active' : ''}`}
                                 onClick={() => setDay(key - startDayNum + 1)}>
                                <>
                                    {sortedForCalendar.map((el: any, idx: number) => {
                                        console.log()
                                        if (el.startDay == (key - startDayNum + 1)) {
                                            return <CalendarTask key={idx}/>
                                        }
                                    })}
                                </>
                                <span className={'day-num'}>{key - startDayNum + 1}</span>
                            </div>
                            :
                            <div data-day={key - startDayNum + 1} key={key} className={'not-this-month'}/>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default Calendar