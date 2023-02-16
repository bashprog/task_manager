import React, {useEffect, useState} from "react";

import {usePopUpStore} from "../../stores/PopUpStore";
import {useDateStore} from "../../stores/CalendarStore";

import PopUp from "../../components/PopUp/PopUp";

import {toISOStringWithTimezone} from "../../helpers/datesHelper";

const checker = (str: any) => {
    if (str < 10) {
        str = `0${str}`
    }

    return `${str}`;
}

const PopUpContainer: React.FC = () => {
    const chosenDate = useDateStore(state => state.chosenDate);
    //Решил адейтить так, я хз как это правильно делать
    useEffect(() => {
        changeStartDate(toISOStringWithTimezone(chosenDate).substring(0, 10));
        changeEndDate(toISOStringWithTimezone(chosenDate).substring(0, 10));
    }, [chosenDate])

    const {toggle, isActive} = usePopUpStore();
    //Dates
    const [startDate, changeStartDate] = useState(toISOStringWithTimezone(chosenDate).substring(0, 10));
    const [endDate, changeEndDate] = useState(toISOStringWithTimezone(chosenDate).substring(0, 10));
    //Time
    const [startTime, changeStartTime] = useState('09:00');
    const [endTime, changeEndTime] = useState('09:30');
    //Title
    const [title, changeTitle] = useState('');
    //Radio
    const [radioBox, changeRadio] = useState('success')
    //TextArea
    const [textArea, changeTextArea] = useState('');

    let timeDiff = (parseInt(endTime.substring(0, 2)) - parseInt(startTime.substring(0,2))) * 60 + (parseInt(endTime.substring(3)) - parseInt(startTime.substring(3)))

    const toggleVisibility = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        (e.target as any).id == 'popup' && toggle()
    };

    const startDateChangeHandler = (e: any) => {
        changeStartDate(e.target.value);

        if ((new Date(e.target.value).getTime() - new Date(endDate).getTime()) > 0) {
            changeEndDate(e.target.value);
        }
    };

    const endDateChangeHandler = (e: any) => {
        changeEndDate(e.target.value);

        if ((new Date(endDate).getTime() - new Date(e.target.value).getTime()) > 0) {
            changeStartDate(e.target.value);
        }
    };

    const addHalfHour = (e: string | any) => {
        let hours = e.substring(0, 2);
        let minutes = e.substring(3);

        if (minutes < 30) {
            minutes = checker(parseInt(minutes)+30)
        } else {
            minutes = checker(parseInt(minutes) + 30 - 60)
            if (startDate == endDate) {
                hours < 23 ? hours = checker(parseInt(hours) + 1) : minutes = '59';
            } else {
                hours < 23 ? hours = checker(parseInt(hours) + 1) : hours = '00';
            }
        }

        return `${hours}:${minutes}`;
    }

    const startTimeChangeHandler = (e: any) => {
        changeStartTime(e.target.value);

        (e.target.value > endTime) && changeEndTime(addHalfHour(e.target.value));
    }

    const endTimeChangeHandler = (e: any) => {
        changeEndTime(e.target.value);

        (e.target.value < startTime) && changeStartTime(e.target.value);
    }

    const props = {
        isActive,
        toggleVisibility,
        startDate,
        endDate,
        startDateChangeHandler,
        endDateChangeHandler,
        startTime,
        endTime,
        startTimeChangeHandler,
        endTimeChangeHandler,
        title,
        changeTitle,
        radioBox,
        changeRadio,
        textArea,
        changeTextArea,
        timeDiff
    }

    return (
        <PopUp {...props}/>
    )
};

export default PopUpContainer;