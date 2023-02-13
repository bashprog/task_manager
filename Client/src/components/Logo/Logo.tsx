import React from "react";

import './Logo.scss';

const Logo: React.FC = () => {
    return (
        <div className={'flex center w100'}>
            <div className={'logo flex center'}>
                <span>A</span>
            </div>
        </div>
    )
}

export default Logo;