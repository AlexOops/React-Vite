import React, {createContext, useState} from "react";

export const UserAuthContext = createContext({
    user: '',
    setTheme: () => {
    },
});

export const UserAuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <UserAuthContext.Provider value={{user, setUser}}>
            {children}
        </UserAuthContext.Provider>
    );
};