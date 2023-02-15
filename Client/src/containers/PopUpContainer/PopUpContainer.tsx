import React, {useEffect, useState} from "react";

import {usePopUpStore} from "../../stores/PopUpStore";
import {useDateStore} from "../../stores/CalendarStore";

import PopUp from "../../components/PopUp/PopUp";

import {toISOStringWithTimezone} from "../../helpers/datesHelper";

const PopUpContainer: React.FC = () => {
    const chosenDate = useDateStore(state => state.chosenDate);
    //Решил адейтить так, я хз как это правильно делать
    useEffect(() => {
        changeStartDate(toISOStringWithTimezone(chosenDate).substring(0, 10));
        changeEndDate(toISOStringWithTimezone(chosenDate).substring(0, 10));
    }, [chosenDate])

    const {toggle, isActive} = usePopUpStore();

    const [startDate, changeStartDate] = useState(toISOStringWithTimezone(chosenDate).substring(0, 10));
    const [endDate, changeEndDate] = useState(toISOStringWithTimezone(chosenDate).substring(0, 10))

    const toggleVisibility = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        (e.target as any).id == 'popup' ? toggle() : null
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

    const props = {
        isActive,
        toggleVisibility,
        startDate,
        endDate,
        startDateChangeHandler,
        endDateChangeHandler,
    }

    return (
        <PopUp {...props}/>
    )
};

export default PopUpContainer;