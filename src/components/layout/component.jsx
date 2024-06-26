import React from 'react';
import {Header} from "../header/component.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../footer/footer.jsx";

import s from "./style.module.scss";

export const Layout = () => {
    return (
        <div className={s.layout}>

            <div id="modal-container"/>
            <div id="popover-container"/>

            <Header/>

            <div className={s.center}>
                <Outlet/>
            </div>

            <Footer/>
        </div>
    );
};