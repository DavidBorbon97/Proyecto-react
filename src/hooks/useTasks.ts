import {useState, useEffect } from "react"
import type { Task } from "../types/task"
import { getTasks, saveTasks } from "../utils/localStorage"


export function useTasks(){

const [tasks, setTasks] = useState<Task[]>(() =>getTasks())

useEffect(() => {
    saveTasks(tasks)
},[tasks])

const addTask = (text: string) =>{
    const newTask: Task ={
        id: crypto.randomUUID(),
        text,
        completed: false
    }

    setTasks(prev =>[...prev, newTask])
}

const deleteTask = (id: string) =>{
    setTasks(prev => prev.filter(task => task.id !== id))
}

const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed))
}

const toggleTask = (id: string) =>{
    setTasks(prev =>
        prev.map(task =>
            task.id === id
            ?{...task, completed: !task.completed}
            : task
        )
    )
}

const editTask = (id: string, newText: string) =>{
    setTasks(prev =>
        prev.map(task =>
            task.id === id
            ?{...task, text: newText}
            : task
        )
    )   
}

return{
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    clearCompleted,
    editTask
}

}