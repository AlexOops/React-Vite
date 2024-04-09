import React from "react";
import ReactDOM from 'react-dom/client';
import {App} from "./App.jsx";
import {Provider} from "react-redux";
import './style.scss';
import {store} from "./redux/index.js";

const rootElement = document.getElementById('root');

const root = ReactDOM.createRoot(rootElement);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);