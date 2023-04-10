import { createContext, useState } from 'react';

//create a context, with createContext api
export const ContextApi = createContext();

const ContextProvider = ({ children }) => {
    // State creation, one for HSL and one for theme
    const [search, setSearch] = useState('');

    return (
        // ContextProvider implementation with state parameters being passed
        <ContextApi.Provider value={{ search, setSearch }}>
            {children}
        </ContextApi.Provider>
    );
};

export default ContextProvider;
