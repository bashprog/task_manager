import React from "react";

import './Aside.scss';

import {RxCaretLeft, RxCaretRight} from "react-icons/rx";

import placeholder from "../../img/avatar.jpg"

import {useDateStore} from "../../stores/CalendarStore";

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Aside: React.FC = () => {
    const {nextDay, prevDay, currentDay, currentMonth, currentYear} = useDateStore();

    return(
        <div className={'aside'}>
            <div className={'day-box'}>
                <div className={'day-settings flex center'}>
                    <div className={'today'}>
                        <p>{currentDay} {months[currentMonth]}, {currentYear}</p>
                    </div>
                    <div className={'caret-control-aside flex'}>
                        <div className="caret-left btn" onClick={prevDay}>
                            <RxCaretLeft/>
                        </div>
                        <div className={'caret-right btn'} onClick={nextDay}>
                            <RxCaretRight/>
                        </div>
                    </div>
                </div>
                <div className="time">
                    <div data-time={'00:00'}><span>00:00</span></div>
                    <div data-time={'1:00'}><span>1:00</span></div>
                    <div data-time={'2:00'}><span>2:00</span></div>
                    <div data-time={'3:00'}><span>3:00</span></div>
                    <div data-time={'4:00'}><span>4:00</span></div>
                    <div data-time={'5:00'}><span>5:00</span></div>
                    <div data-time={'6:00'}><span>6:00</span></div>
                    <div data-time={'7:00'}><span>7:00</span></div>
                    <div data-time={'8:00'}><span>8:00</span></div>
                    <div data-time={'9:00'}><span>9:00</span></div>
                    <div data-time={'10:00'}><span>10:00</span></div>
                    <div data-time={'11:00'}><span>11:00</span></div>
                    <div data-time={'12:00'}><span>12:00</span></div>
                    <div data-time={'13:00'}><span>13:00</span></div>
                    <div data-time={'14:00'}><span>14:00</span></div>
                    <div data-time={'15:00'}><span>15:00</span></div>
                    <div data-time={'16:00'}><span>16:00</span></div>
                    <div data-time={'17:00'}><span>17:00</span></div>
                    <div data-time={'18:00'}><span>18:00</span></div>
                    <div data-time={'19:00'}><span>19:00</span></div>
                    <div data-time={'20:00'}><span>20:00</span></div>
                    <div data-time={'21:00'}><span>21:00</span></div>
                    <div data-time={'22:00'}><span>22:00</span></div>
                    <div data-time={'23:00'}><span>23:00</span></div>
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