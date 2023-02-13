import React from "react";

import './Aside.scss';

import {RxCaretLeft, RxCaretRight} from "react-icons/rx";

import placeholder from "../../img/avatar.jpg"

const Aside: React.FC = () => {
    return(
        <div className={'aside'}>
            <div className={'day-box'}>
                <div className={'day-settings flex center'}>
                    <div className={'today'}>
                        <p>12 July, 2023</p>
                    </div>
                    <div className={'caret-control-aside flex'}>
                        <div className="caret-left btn">
                            <RxCaretLeft/>
                        </div>
                        <div className={'caret-right btn'}>
                            <RxCaretRight/>
                        </div>
                    </div>
                </div>
                <div className="time">
                    <div>
                        00:00
                    </div>
                    <div>
                        1:00
                    </div>
                    <div>
                        2:00
                    </div>
                    <div>
                        3:00
                    </div>
                    <div>
                        4:00
                    </div>
                    <div>
                        5:00
                    </div>
                    <div>
                        6:00
                    </div>
                    <div>
                        7:00
                    </div>
                    <div>
                        8:00
                    </div>
                    <div>
                        9:00
                    </div>
                    <div>
                        10:00
                    </div>
                    <div>
                        11:00
                    </div>
                    <div>
                        12:00
                    </div>
                    <div>
                        13:00
                    </div>
                    <div>
                        14:00
                    </div>
                    <div>
                        15:00
                    </div>
                    <div>
                        16:00
                    </div>
                    <div>
                        17:00
                    </div>
                    <div>
                        18:00
                    </div>
                    <div>
                        19:00
                    </div>
                    <div>
                        20:00
                    </div>
                    <div>
                        21:00
                    </div>
                    <div>
                        22:00
                    </div>
                    <div>
                        23:00
                    </div>
                </div>
            </div>
            <div className={'event'}>
                <span className="title">
                    Meeting with devs
                </span>
                <span className="date">
                    12 July, 2023. 15:00-16:30
                </span>
                <span className={'description'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, repellat?
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
                    Send request
                </div>
            </div>
        </div>
    )
};

export default Aside;