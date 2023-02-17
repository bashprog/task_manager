import React, {useEffect, useState} from "react";

import './PopUp.scss';

import {usePopUpStore} from "../../stores/PopUpStore";
import {useDateStore} from "../../stores/CalendarStore";
import Task from "../Task/Task";

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
    timeDiff: number,
    addTaskHandler: () => void
}

const PopUp: React.FC<IProps> = (props) => {
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
                    <div className="preview" style={{height: `${props.timeDiff}px`}}>
                        <span>Preview</span>
                        <br/>
                        <Task id={'preview'}
                              startDate={props.startDate}
                              startYear={parseInt(props.startDate.substring(0, 4))}
                              startMonth={parseInt(props.startDate.substring(5, 7)) - 1}
                              startDay={parseInt(props.startDate.substring(8, 10))}
                              endDate={props.endDate}
                              endYear={parseInt(props.endDate.substring(0, 4))}
                              endMonth={parseInt(props.endDate.substring(5, 7)) - 1}
                              endDay={parseInt(props.endDate.substring(8, 10))}
                              startTime={props.startTime}
                              endTime={props.endTime}
                              title={props.title}
                              description={props.textArea}
                              color={props.radioBox}
                              timeDiffInMinutes={props.timeDiff}/>
                    </div>
                </div>
                <div className="flex">
                    <div className="btn add-btn" onClick={props.addTaskHandler}>
                        Add task
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PopUp;