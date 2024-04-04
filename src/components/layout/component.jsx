import React from 'react';
import {Header} from "../header/component.jsx";

export const Layout = ({children}) => {
    return (
        <div>
            <Header/>

            {children}

            <footer>тут будет footer</footer>
        </div>
    );
};