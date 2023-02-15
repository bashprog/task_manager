import React, {useEffect, useState} from "react";

import './PopUp.scss';

import {usePopUpStore} from "../../stores/PopUpStore";
import {useDateStore} from "../../stores/CalendarStore";

interface IProps {
    toggleVisibility: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void,
    isActive: boolean,
    startDate: string,
    endDate: string,
    startDateChangeHandler: (e: any) => void,
    endDateChangeHandler: (e: any) => void,
}

const PopUp: React.FC<IProps> = (props) => {
    return(
        <section id={`popup`} className={`${props.isActive ? '' : 'hidden'}`} onClick={e => props.toggleVisibility(e)}>
            <div className={'popup'}>
                <div className="flex">
                    <input type="date" id={'task-start-date'} value={`${props.startDate}`} onChange={e => props.startDateChangeHandler(e)}/>
                    <input type="date" id={'task-end-date'} value={`${props.endDate}`} onChange={e => props.endDateChangeHandler(e)}/>
                </div>
            </div>
        </section>
    )
};

export default PopUp;