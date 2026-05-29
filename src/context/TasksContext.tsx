import { createContext,useContext, type ReactNode } from "react"
import { useTasks } from "../hooks/useTasks"

type TasksContextType = ReturnType<typeof useTasks>

const TasksContext = createContext<TasksContextType | null>(null)

export function TasksProvider({children,}:
    {
    children: ReactNode
    })
{
    const value = useTasks()

    return(
        <TasksContext.Provider value={value}>
            {children}
        </TasksContext.Provider>
    )
}

export function useTasksContext(){
    const context = useContext(TasksContext)

    if(!context){
        throw new Error("useTasksContext must be used inside TasksProvider")
    }
    return context
}