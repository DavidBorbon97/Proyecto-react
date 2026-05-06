import type {Task} from "../types/task"

export const removeTask = (tasks: Task[], id: string) => {
    return tasks.filter(task => task.id !== id)
}

export const toggleTaskStatus = (tasks: Task[], id: string): Task[] =>{
    return tasks.map(task =>
        task.id === id
            ?{...task, completed: !task.completed}
            : task
    )
}

export const editTask = (tasks: Task[], id: string, newText: string): Task[] =>{
        return tasks.map(task =>
        task.id === id
            ?{...task, text: newText}
            : task
        )
}

export const createTask =(text: string):Task => {
    return{
        id: crypto.randomUUID(),
        text,
        completed: false
    }
}