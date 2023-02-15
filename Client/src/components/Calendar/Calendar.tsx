import React from "react";

import './Calendar.scss';

import CalendarControl from "../CalendarControl/CalendarControl";

import {useDateStore} from "../../stores/CalendarStore";

interface IProps {
    startDayName: string,
    totalDays: number,
    startDayNum: number
}

const Calendar: React.FC<IProps> = ({totalDays, startDayNum}) => {
    const {setDay, currentDay} = useDateStore();
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