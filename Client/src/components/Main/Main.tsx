import React from "react";

import './Main.scss';
import Calendar from "../Calendar/Calendar";
import Aside from "../Aside/Aside";

const Main: React.FC = () => {
    return(
        <main className={'flex'}>
            <Calendar/>
            <Aside/>
        </main>
    )
};

export default Main;