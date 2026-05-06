import {useState, useEffect } from "react"
import type { Task } from "../types/task"
import { getTasks, saveTasks } from "../utils/localStorage"
import { removeTask, toggleTaskStatus, editTask, createTask } from "../tasks/task.service"


export function useTasks(){

const [tasks, setTasks] = useState<Task[]>(() =>getTasks())

useEffect(() => {
    saveTasks(tasks)
},[tasks])

const addTask = (text: string) =>{
    const newTask = createTask(text)
    setTasks(prev => [...prev, newTask])
}

const deleteTask = (id: string)=>{
    setTasks(prev => removeTask(prev, id))
}

const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed))
}

const toggleTask = (id: string) =>{
    setTasks(prev => toggleTaskStatus(prev, id))
}

const editTaskHandler = (id:string, newText: string)=>{
    setTasks(prev => editTask(prev, id, newText))
}
  
return{
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    clearCompleted,
    editTaskHandler
}

}