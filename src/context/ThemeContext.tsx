import { createContext, useContext,useEffect,useState, type ReactNode} from "react"
import {getTheme, saveTheme} from"../utils/localStorage"


type ThemeContextType = {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType | null>(null)
//type ThemeContextType = ReturnType<typeof useTheme>

export function ThemeProvider({children}: {children: ReactNode}){
    const [darkMode, setDarkMode] = useState<boolean>(() => getTheme())

    useEffect(()=> {
        saveTheme(darkMode)
    },[darkMode])

    return(
        <ThemeContext.Provider
             value={{
                darkMode,
                setDarkMode
        }}
        >
            {children}
        </ThemeContext.Provider>
    )

}   

export function useThemeContext(){
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error(
            "useThemecontext must be used inside ThemeProvider"
        )
    }

    return context
}

