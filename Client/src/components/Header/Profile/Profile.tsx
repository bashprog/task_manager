import React from 'react';

import './Profile.scss';

import {TbBell} from 'react-icons/tb';
import {AiFillCaretDown} from 'react-icons/ai'

import placeholder from '../../../img/avatar.jpg';

const Profile: React.FC = () => {
    return(
        <div className={'profile'}>
            <TbBell/>
            <div className={'flex center'}>
                <div className={'avatar flex center'}>
                    <img src={placeholder} alt=""/>
                </div>
                <span className={'name'}>Firstname Lastname</span>
                <AiFillCaretDown/>
            </div>
        </div>
    )
};

export default Profile;