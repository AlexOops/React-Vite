import React from 'react';

export const Layout = ({children}) => {
    return (
        <div>
            <header>тут будет header</header>

            {children}

            <footer>тут будет footer</footer>
        </div>
    );
};