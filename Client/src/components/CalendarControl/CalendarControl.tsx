import React from "react";

import './CalendarControl.scss';

import {RxCaretLeft, RxCaretRight} from 'react-icons/rx'

const CalendarControl: React.FC = () => {
    return (
        <div className={'calendar-control'}>
            <div className={'today'}>
                <span>Today</span>
                <p>12 July, 2023</p>
            </div>
            <div className={'caret-control flex'}>
                <div className="caret-left btn">
                    <RxCaretLeft/>
                </div>
                <div className={'caret-right btn'}>
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
            <div className={'add-button btn flex center'}>
                <span>+ Add Event</span>
            </div>
        </div>
    )
};

export default CalendarControl;