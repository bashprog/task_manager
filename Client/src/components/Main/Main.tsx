import React from "react";

import './Main.scss';
import CalendarContainer from "../../containers/CalendarContainer/CalendarContainer";
import Aside from "../Aside/Aside";

const Main: React.FC = () => {
    return(
        <main className={'flex'}>
            <CalendarContainer/>
            <Aside/>
        </main>
    )
};

export default Main;