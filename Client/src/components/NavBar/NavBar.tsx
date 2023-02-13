import React from "react";

import Logo from '../Logo/Logo';

import './NavBar.scss';

import {FiHome} from "react-icons/fi";
import {HiOutlineCalendarDays, HiOutlineCog} from "react-icons/hi2";
import {AiOutlineVideoCamera} from "react-icons/ai";

const NavBar: React.FC = () => {
    return(
        <div className={'navbar'}>
            <Logo />
            <ul className={'navbar-list'}>
                <li>
                    <FiHome/>
                    <span>Home</span>
                </li>
                <li>
                    <HiOutlineCalendarDays/>
                    <span>Calendar</span>
                </li>
                <li>
                    <AiOutlineVideoCamera/>
                    <span>Meetings</span>
                </li>
                <li>
                    <HiOutlineCog/>
                    <span>Settings</span>
                </li>
            </ul>
        </div>
    )
};

export default NavBar;