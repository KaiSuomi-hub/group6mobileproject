import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        primaryColor: '#65558F',
        backgroundColor: '#FFFFFF',
        textColor: '#1D1B20',
        inputBackgroundColor: '#e6e0e9',
        inputTextColor: '#1d1b20',
        labelColor: '#49454f',
        buttonTextColor: '#FFFFFF',
        iconBackgroundColor: '#FFFFFF',
        receivedMessageBackgroundColor: '#625b71',
        sentMessageBackgroundColor: '#ece6f0',
        receivedMessageTextColor: '#FFFFFF',
        sentMessageTextColor: '#49454f',
    });

    const changeTheme = (newTheme) => {
        setTheme({
            ...theme,
            ...newTheme,
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);