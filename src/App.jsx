import React from 'react';
import {Layout} from "./components/layout/component.jsx";
import {Main} from "./pages/main.jsx";
import {ThemeProvider} from "./contexts/theme.jsx";
import {UserAuthProvider} from "./contexts/userAuth.jsx";

export const App = () => {
    return (
        <ThemeProvider>
            <UserAuthProvider>
                <Layout>
                    <Main/>
                </Layout>
            </UserAuthProvider>
        </ThemeProvider>
    );
};