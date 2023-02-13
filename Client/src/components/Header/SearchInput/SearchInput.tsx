import React from "react";

import './SearchInput.scss';

import {FiSearch} from "react-icons/fi";

const SearchInput: React.FC = () => {
    return (
        <div className={'search'}>
            <input id={'search'} type="text" placeholder={'Search for ivents'}/>
            <label htmlFor={'search'}><FiSearch/></label>
        </div>
    )
};

export default SearchInput;