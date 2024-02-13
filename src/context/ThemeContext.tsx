import React, {createContext, useContext, useState} from "react";

interface  IThemeContext {
    isDark: boolean,
    toggleTheme: () => void
}

interface Props {
    children: React.ReactNode
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () =>  {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Context error');
    }
    return context;
};

export const ThemeProvider = ({children}: Props) => {
    const [isDark, setIsDark] = useState<boolean>(true);
    const toggleTheme = () => {
        setIsDark(prev => !prev)
    }
    return <ThemeContext.Provider value={{isDark, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}
