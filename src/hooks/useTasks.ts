import {useState, useEffect } from "react"
import type { Task } from "../types/task"

export function useTasks(){

    const [tasks, setTasks] = useState<Task[]>(()=>{
        const saved = localStorage.getItem("tasks")
        return saved ? JSON.parse(saved): []
    })

useEffect(() =>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
}, [tasks])

const addTask = (text: string) =>{
    const newTask: Task ={
        id: crypto.randomUUID(),
        text,
        completed: false
    }

    setTasks([...tasks, newTask])
}

const deleteTask = (id: string) =>{
    setTasks(tasks.filter(task => task.id !== id))
}

const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed))
}

const toggleTask = (id: string) =>{
    setTasks(
        tasks.map(task =>
            task.id === id
            ? {...task, completed: !task.completed}
            :task
        )
    )
}

const editTask = (id: string, newText: string) =>{
    setTasks(
        tasks.map(task =>
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