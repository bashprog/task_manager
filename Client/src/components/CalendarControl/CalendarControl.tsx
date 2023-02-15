import React from "react";

import './CalendarControl.scss';

import {RxCaretLeft, RxCaretRight} from 'react-icons/rx'

import {useDateStore} from "../../stores/CalendarStore";
import {usePopUpStore} from "../../stores/PopUpStore";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const CalendarControl: React.FC = () => {
    const {nextMonth, prevMonth, currentYear, currentMonth} = useDateStore();
    const {toggle} = usePopUpStore();
    return (
        <div className={'calendar-control'}>
            <div className={'today'}>
                <p>{months[currentMonth]}, {currentYear} &nbsp;&nbsp;</p>
            </div>
            <div className={'caret-control flex'}>
                <div className="caret-left btn" onClick={prevMonth}>
                    <RxCaretLeft/>
                </div>
                <div className={'caret-right btn'} onClick={nextMonth}>
                    <RxCaretRight/>
                </div>
            </div>
            <div className={'selects-control'}>
                <select name={'category'}>
                    <option value="">All category</option>
                    <option value="">Danger</option>
                    <option value="">Warning</option>
                </select>
                <input id={'start-date'} type={'date'}/>
                <input id={'end-date'} type={'date'}/>
            </div>
            <div className={'add-button btn flex center'} onClick={toggle}>
                <span>+ Add Event</span>
            </div>
        </div>
    )
};

export default CalendarControl;