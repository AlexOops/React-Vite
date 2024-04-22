import React from 'react';
import {ThemeProvider} from "./contexts/theme.jsx";
import {UserAuthProvider} from "./contexts/userAuth.jsx";
import {RouterProvider} from "react-router-dom";
import {router} from "./router.jsx";

export const App = () => {
    return (

        <ThemeProvider>
            <UserAuthProvider>

                <RouterProvider router={router}/>

            </UserAuthProvider>
        </ThemeProvider>

    );
};