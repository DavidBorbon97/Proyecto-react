import { createContext, useContext,useState, type ReactNode} from "react"


type ThemeContextType = {
    darkMode: boolean
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const ThemeContext = createContext<ThemeContextType | null>(null)
//type ThemeContextType = ReturnType<typeof useTheme>

export function ThemeProvider({children}: {children: ReactNode}){
    const [darkMode, setDarkMode] = useState(false)

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

