import {useEffect,useReducer } from "react"
import {getTasks, saveTasks } from "../utils/localStorage"
import {taskReducer}from "../tasks/taskReducer"


export function useTasks(){

const initialState = getTasks()

const [tasks, dispatch] = useReducer(taskReducer, initialState)

useEffect(() => {
    saveTasks(tasks)
},[tasks])

const addTask = (text: string) =>{
    dispatch({
        type: "ADD_TASK",
        payload: text
    })
}

const deleteTask = (id: string)=>{
    dispatch({
        type:"DELETE_TASK",
        payload: id
    })
} 

const clearCompleted = () => {
    dispatch({
        type:"CLEAR_COMPLETED"
    })
}

const toggleTask = (id: string) =>{
    dispatch({
        type: "TOGGLE_TASK",
        payload: id
    })
}

const editTaskHandler = (id:string, newText: string)=>{
    dispatch({
        type: "EDIT_TASK",
        payload:{
            id,
            newText
        }
    })
}

const markAllCompleted = () => {
    dispatch({
        type: "MARK_ALL_COMPLETED"
    })
}

const unmarkAllCompleted= () =>{
    dispatch({
        type: "UNMARK_ALL_COMPLETED"
    })
}
  
return{
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    clearCompleted,
    editTaskHandler,
    markAllCompleted,
    unmarkAllCompleted
}

}