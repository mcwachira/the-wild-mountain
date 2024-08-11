import React, {createContext, useContext, useEffect, useState} from "react";
import {useLocalStorageState} from "../hooks/useLocalStorageState.ts";
const DarkModeContext = createContext({

})

 const DarkModeProvider =({children}:React.ReactElement) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode')


     useEffect(
         function() {
             if(isDarkMode){
                 document.documentElement.classList.add("dark-mode");
                 document.documentElement.classList.remove("light-mode");
             }else{
                 document.documentElement.classList.remove("dark-mode");
                 document.documentElement.classList.add("light-mode");
             }
             }, [isDarkMode]);
     const toggleDarkMode = () => {
        setIsDarkMode((isDark) => !isDark)
     }
    return (
        <DarkModeContext.Provider value={{isDarkMode, toggleDarkMode}}>{children}</DarkModeContext.Provider>
    )
 }

 const useDarkMode = () => {
    const context = useContext(DarkModeContext);

    if(context ===undefined) throw new Error('Dark mode context must be used within DarkModeProvider');

    return context;
 }

 export {DarkModeProvider, useDarkMode}