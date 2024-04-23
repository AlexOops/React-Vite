import React, {useContext, useRef, useState} from 'react';

import s from './style.module.scss';
import {Button} from "../../button/component.jsx";
import {BackgroundImage} from "../../background-image/component.jsx";
import {ThemeContext} from "../../../contexts/theme.jsx";
import {createPortal} from "react-dom";
import {Popover} from "../../popover/component.jsx";
import {Link} from "react-router-dom";

export const Hero = () => {

    const buttonRef = useRef();

    const [cartPosition, setCartPosition] = useState();
    const container = document.getElementById("popover-container");

    const openHits = () => {

        if (buttonRef.current) {
            const {x, y, width, height} = buttonRef.current.getBoundingClientRect();
            setCartPosition({x: x + width, y: y + height});
        }
    }

    const {theme} = useContext(ThemeContext);

    return (
        <div>
            <div className={"container-color"}>
                <div className={"container"}>

                    <div className={s.content}>
                        <div className={s.info}>
                            <Button
                                children={"Быстрая Доставка"}
                                viewVariant={theme === 'dark' ? 'dark' : 'light'}
                                size={'l'}
                            />

                            <h1 className={s.title}>Откройте для себя свое любимое блюдо
                                и <span>пробуйте его вечно</span></h1>
                            <p className={s.text}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>

                            <Button
                                ref={buttonRef}
                                onClick={() => openHits()}
                                children={"Вкусно покушать"}
                                viewVariant={theme === 'dark' ? 'dark' : 'base'}
                                size={'l'}
                            />

                            {
                                cartPosition &&
                                container &&

                                createPortal(
                                                /* позиция */
                                    <Popover {...cartPosition} onClose={() => setCartPosition(null)}>
                                        <div>Ты можешь вкусно покушайть перейдя по ссылке
                                            <Link className={s.link} to={"/restaurants"}>RESTAURANTS</Link>
                                        </div>
                                    </Popover>,

                                    container
                                )
                            }

                        </div>

                        <BackgroundImage imageSrc={'src/assets/mainDish.png'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};