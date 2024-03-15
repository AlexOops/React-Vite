import React from "react";
import ReactDOM from 'react-dom/client';

import {restaurants} from '../materials/mock.js';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <>
        <div>
            <h1>{restaurants[0].name}</h1>

            <h3>Меню</h3>

            <ul>
                <li><p>{restaurants[0].menu[0].name}</p></li>
                <li><p>{restaurants[0].menu[1].name}</p></li>
                <li><p>{restaurants[0].menu[2].name}</p></li>
            </ul>

            <h3>Отзывы</h3>

            <ul>
                <li>
                    <p>{restaurants[0].reviews[0].user}</p>
                    <p>{restaurants[0].reviews[0].text}</p>
                </li>
                <li>
                    <p>{restaurants[0].reviews[1].user}</p>
                    <p>{restaurants[0].reviews[1].text}</p>
                </li>
            </ul>
        </div>

        <br/>

        <div>
            <h1>{restaurants[1].name}</h1>

            <h3>Меню</h3>

            <ul>
                <li><p>{restaurants[1].menu[0].name}</p></li>
                <li><p>{restaurants[1].menu[1].name}</p></li>
            </ul>

            <h3>Отзывы</h3>

            <ul>
                <li>
                    <p>{restaurants[1].reviews[0].user}</p>
                    <p>{restaurants[1].reviews[0].text}</p>
                </li>
                <li>
                    <p>{restaurants[1].reviews[1].user}</p>
                    <p>{restaurants[1].reviews[1].text}</p>
                </li>
                <li>
                    <p>{restaurants[1].reviews[1].user}</p>
                    <p>{restaurants[1].reviews[1].text}</p>
                </li>
            </ul>
        </div>

        <br/>

        <div>
            <h1>{restaurants[2].name}</h1>

            <h3>Меню</h3>

            <ul>
                <li><p>{restaurants[2].menu[0].name}</p></li>
                <li><p>{restaurants[2].menu[1].name}</p></li>
                <li><p>{restaurants[2].menu[2].name}</p></li>
            </ul>

            <h3>Отзывы</h3>

            <ul>
                <li>
                    <p>{restaurants[2].reviews[0].user}</p>
                    <p>{restaurants[2].reviews[0].text}</p>
                </li>
            </ul>
        </div>

        <br/>

        <div>
            <h1>{restaurants[3].name}</h1>

            <h3>Меню</h3>

            <ul>
                <li><p>{restaurants[3].menu[0].name}</p></li>
                <li><p>{restaurants[3].menu[1].name}</p></li>
            </ul>

            <h3>Отзывы</h3>

            <ul>
                <li>
                    <p>{restaurants[3].reviews[0].user}</p>
                    <p>{restaurants[3].reviews[0].text}</p>
                </li>
                <li>
                    <p>{restaurants[3].reviews[1].user}</p>
                    <p>{restaurants[3].reviews[1].text}</p>
                </li>
            </ul>
        </div>
    </>

    // React.createElement('div', {
    //         children: [
    //             React.createElement('h1', {
    //                 children: restaurants[0].name
    //             }),
    //
    //             React.createElement('h3', {
    //                 children: "Меню"
    //             }),
    //
    //             React.createElement('ul', {
    //                 children: [
    //                     React.createElement('li', {
    //                         children: React.createElement('p', {
    //                             children: restaurants[0].menu[0].name
    //                         })
    //                     }),
    //
    //                     React.createElement('li', {
    //                         children: React.createElement('p', {
    //                             children: restaurants[0].menu[1].name
    //                         })
    //                     }),
    //
    //                     React.createElement('li', {
    //                         children: React.createElement('p', {
    //                             children: restaurants[0].menu[2].name
    //                         })
    //                     }),
    //                 ]
    //             }),
    //
    //             React.createElement('h3', {
    //                 children: "Отзывы"
    //             }),
    //
    //             React.createElement('ul', {
    //                 children: [
    //                     React.createElement('li', {
    //                         children: [
    //                             React.createElement('p', {
    //                                 children: restaurants[0].reviews[0].user
    //                             }),
    //
    //                             React.createElement('p', {
    //                                 children: restaurants[0].reviews[0].text
    //                             }),
    //                         ]
    //                     }),
    //
    //                     React.createElement('li', {
    //                         children: [
    //                             React.createElement('p', {
    //                                 children: restaurants[0].reviews[1].user
    //                             }),
    //
    //                             React.createElement('p', {
    //                                 children: restaurants[0].reviews[1].text
    //                             }),
    //                         ]
    //                     }),
    //                 ]
    //             }),
    //         ]
    //     }
    // )
);

