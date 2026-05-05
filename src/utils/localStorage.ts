import type {Task} from "../types/task"

export const saveTasks = (tasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
}

export const getTasks = (): Task[] => {
    const data = localStorage.getItem("tasks")

    try{
        return data ? JSON.parse(data): []
    } catch (error){
        console.error("Error parsing tasks:", error)
        return[]
    }
}