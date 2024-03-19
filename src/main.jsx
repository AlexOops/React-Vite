import React from "react";
import ReactDOM from 'react-dom/client';
import {Restaurants} from "./components/restaurants/component.jsx";
import {Layout} from "./components/layout/component.jsx";

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <>
        <Layout>
            <Restaurants/>
        </Layout>
    </>
);