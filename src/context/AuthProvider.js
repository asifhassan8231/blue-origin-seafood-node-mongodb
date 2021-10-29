import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const ProductContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        <ProductContext.Provider value={allContext}>
            {children}
        </ProductContext.Provider>
    );
};

export default AuthProvider;