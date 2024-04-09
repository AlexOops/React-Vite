import React, {useContext} from 'react';
import {Navigate} from "../navigate/component.jsx";

import s from './style.module.scss';
import {Button} from "../button/component.jsx";
import {ThemeContext} from "../../contexts/theme.jsx";
import {UserAuthContext} from "../../contexts/userAuth.jsx";

export const Header = () => {

    const {theme, setTheme} = useContext(ThemeContext);
    const {user, setUser} = useContext(UserAuthContext);

    return (
        <div>

            <div className={"container-color"}>
                <div className={"container"}>

                    <div className={s.content}>
                        <div className={s.logo}>
                            <p>Tammy<span>Food</span></p>

                            <Button
                                children={'ПОКРАСИТЬ'}
                                viewVariant={'dark'}
                                className={s.action}
                                size={'s'}

                                onClick={() => setTheme(theme === 'base' ? 'dark' : 'base')}
                            />
                        </div>

                        <div className={s.control}>

                            <Navigate/>

                            {
                                user ? (
                                    <div className={s.auth}>

                                        <p className={s.user}>{user}</p>

                                        <Button
                                            children={'Выйти'}
                                            viewVariant={'dark'}
                                            size={'m'}

                                            onClick={() => setUser(null)}
                                        />
                                    </div>

                                ) : (

                                    <Button
                                        children={'Личный кабинет'}
                                        viewVariant={theme === 'dark' ? 'dark' : 'base'}
                                        size={'m'}

                                        onClick={() => setUser('alex')}
                                    />
                                )
                            }

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};