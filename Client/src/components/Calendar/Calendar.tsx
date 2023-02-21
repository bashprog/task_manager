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
                                <span className={'day-num'}>{key - startDayNum + 1}</span>
                                <>
                                    {sortedForCalendar.filter((val: any) => val.startDay == (key - startDayNum + 1)).map((el: any, idx: number) => {
                                        if (idx < 3) {
                                            return <CalendarTask key={el.id} color={el.color} title={el.title}/>
                                        } else {
                                            return <span className={'more'} key={idx}>+{idx - 2} more</span>
                                        }
                                    })}
                                </>
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