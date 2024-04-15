import React from 'react';
import {Button} from "../button/component.jsx";
import s from "./style.module.scss";

export const Counter = ({value, increment, decrement, min = 0, max = 5}) => {
    return (
        <div className={s.buttons}>
            <Button
                children={'-'}
                onClick={decrement}
                disabled={value === min}
                viewVariant={'amount'}
            />

            <div className={s.amount}>
                {value}
            </div>

            <Button
                children={'+'}
                onClick={increment}
                disabled={value === max}
                viewVariant={'amount'}
            />
        </div>
    );
};