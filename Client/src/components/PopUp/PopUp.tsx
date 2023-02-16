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
    startTime: string,
    endTime: string,
    startTimeChangeHandler: (e: any) => void,
    endTimeChangeHandler: (e: any) => void,
    title: string,
    changeTitle: (s: any) => void,
    radioBox: string,
    changeRadio: (e: any) => void,
    textArea: string,
    changeTextArea: (e: any) => void,
    timeDiff: number
}

const PopUp: React.FC<IProps> = (props) => {
    console.log(props.timeDiff);
    return (
        <section id={`popup`} className={`${!props.isActive && 'hidden'}`} onClick={props.toggleVisibility}>
            <div className={'popup'}>
                <div className="flex">
                    <input type="date" id={'task-start-date'} value={props.startDate}
                           onChange={props.startDateChangeHandler}/>
                    <input type="date" id={'task-end-date'} value={props.endDate}
                           onChange={props.endDateChangeHandler}/>
                </div>
                <div className="flex">
                    <input type="time" id={'task-start-time'} value={props.startTime}
                           onChange={props.startTimeChangeHandler}/>
                    <input type="time" id={'task-end-time'} value={props.endTime}
                           onChange={props.endTimeChangeHandler}/>
                </div>
                <div className="flex">
                    <div className="relative">
                        <input type="text" id={'task-title'} value={props.title}
                               onChange={e => props.changeTitle(e.target.value)}/>
                        <span>Title</span>
                    </div>
                    <div className="choose-color">
                        <span>Choose color</span>
                        <br/>
                        <label className="radio-container">
                            <input type="radio" value={'success'} name={'color'} checked={props.radioBox == 'success'}
                                   onChange={e => props.changeRadio(e.target.value)}/>
                            <span className="checkmark success"/>
                        </label>
                        <label className="radio-container">
                            <input type="radio" value={'primary'} name={'color'} checked={props.radioBox == 'primary'}
                                   onChange={e => props.changeRadio(e.target.value)}/>
                            <span className="checkmark primary"/>
                        </label>
                        <label className="radio-container">
                            <input type="radio" value={'danger'} name={'color'} checked={props.radioBox == 'danger'}
                                   onChange={e => props.changeRadio(e.target.value)}/>
                            <span className="checkmark danger"/>
                        </label>
                        <label className="radio-container">
                            <input type="radio" value={'warning'} name={'color'} checked={props.radioBox == 'warning'}
                                   onChange={e => props.changeRadio(e.target.value)}/>
                            <span className="checkmark warning"/>
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="relative">
                        <textarea id={'description'} rows={4} value={props.textArea}
                                  onChange={e => props.changeTextArea(e.target.value)}/>
                        <span>Description</span>
                    </div>
                </div>
                <div className="flex">
                    <div className="preview">
                        <span>Preview</span>
                        <br/>
                        <div className={`task ${props.radioBox} ${props.timeDiff > 45 && 'column'}`} style={{height: `${props.timeDiff}px`}}>
                            <span className="task-time">
                                {props.startTime} - {props.endTime}
                            </span>
                            <span className="title">
                                {props.title}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PopUp;