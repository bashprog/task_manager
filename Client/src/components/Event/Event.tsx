import React from "react";

import './Event.scss';

import placeholder from "../../img/avatar.jpg";

import {months} from "../../helpers/datesHelper";

interface IProps {
    id?: number,
    startDate?: string,
    startYear?: number,
    startMonth?: number,
    startDay?: number,
    endDate?: string,
    endYear?: number,
    endMonth?: number,
    endDay?: number,
    startTime?: string,
    endTime?: string,
    title?: string,
    description?: string,
    color?: string,
    timeDiffInMinutes?: number,
    members?: any[]
}

const Event: React.FC<IProps | any> = (props) => {
    console.log(props);
    return (
        <div className={'event'}>
            {Object.keys(props).length == 0 ?
                <h3>Chose task</h3>
                :
                <>
                    <span className="title">
                        {props.title}
                    </span>
                    <span className="date">
                        {(props.startYear == props.endYear && props.startMonth == props.endMonth && props.startDay == props.endDay) ?
                        `${props.startDay} ${months[props.startMonth]}, ${props.startYear}. ${props.startTime}-${props.endTime}` :
                            `${props.startDay} ${months[props.startMonth]}, ${props.startYear}. ${props.startTime} - ${props.endTime}, ${props.endDay} ${months[props.endMonth]}, ${props.endYear}.`}
                    </span>
                    <span className={'description'}>
                        {props.description}
                    </span>
                    <div className="avatars">
                        <div>
                            <img src={placeholder} alt=""/>
                        </div>
                        <div>
                            <img src={placeholder} alt=""/>
                        </div>
                        <div>
                            <img src={placeholder} alt=""/>
                        </div>
                        <div>
                            <img src={placeholder} alt=""/>
                        </div>
                        <div>
                            <img src={placeholder} alt=""/>
                        </div>
                        <div>
                            <img src={placeholder} alt=""/>
                        </div>
                        <div className={'last-count'}>
                            +78
                        </div>
                    </div>
                    <div className={'btn action'}>
                        Change Task
                    </div>
                </>}
        </div>
    )
};

export default Event;