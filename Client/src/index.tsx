import React from 'react';
import ReactDOM from 'react-dom/client';

import './main.scss';

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
//

root.render(
    <div className={'app-box'}>
        <NavBar />
        <Header/>
        <Main/>
    </div>
)

