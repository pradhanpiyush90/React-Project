import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [isDark, setTheme] = useState(JSON.parse(localStorage.getItem('isDarkMode')));

    return <ThemeContext.Provider value={[isDark, setTheme]}>
        {children}
    </ ThemeContext.Provider>

}