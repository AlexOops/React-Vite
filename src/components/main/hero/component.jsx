import React, {useContext} from 'react';

import s from './style.module.scss';
import {Button} from "../../button/component.jsx";
import {BackgroundImage} from "../../background-image/component.jsx";
import {ThemeContext} from "../../../contexts/theme.jsx";

export const Hero = () => {

    const { theme } = useContext(ThemeContext);

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
                                children={"Вкусно покушать"}
                                viewVariant={theme === 'dark' ? 'dark' : 'base'}
                                size={'l'}
                            />
                        </div>

                        <BackgroundImage imageSrc={'src/assets/mainDish.png'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};