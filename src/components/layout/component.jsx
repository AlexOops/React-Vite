import React from 'react';

export const Layout = ({children}) => {
    return (
        <div>
            <header>тут будет header</header>

            <hr/>

            {children}

            <hr/>

            <footer>тут будет footer</footer>
        </div>
    );
};