import React, { createContext } from 'react';

export const AuthContext = createContext();

const UseContext = ({children}) => {

    const authInfo = {};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;