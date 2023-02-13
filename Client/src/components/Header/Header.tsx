import React from "react";

import './Header.scss';
import SearchInput from "./SearchInput/SearchInput";
import Profile from "./Profile/Profile";

const Header: React.FC = () => {
    return (
        <header>
            <SearchInput />
            <Profile/>
        </header>
    )
};

export default Header;