import type {Task} from "../../types/task"
import { useTasksContext } from "../../context/TasksContext"
import { useState } from "react"
import React from "react"
import { useThemeContext } from "../../context/ThemeContext"
import "./TaskItem.css"

type Props ={
    task: Task
}


//function TaskItem({ task, onDeleteTask, onToggleTask, onEditTask }: Props)
const TaskItem = React.memo(function TaskItem({task}:Props)
{
    console.log("TaskItem render", task.text)
    const {deleteTask, toggleTask, editTaskHandler} = useTasksContext()
    const {darkMode} = useThemeContext()
    
    const[editText, setEditText] = useState(task.text)
    const[isEditing, setIsEditing] = useState(false)
    return(
        <li
            className={
                darkMode
                    ? "task-item task-item-dark"
                    : "task-item task-item-light"
            }
        >

            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
            onKeyDown={(e) =>{
                if (e.key === "Enter"){
                    editTaskHandler(task.id, editText)
                    setIsEditing(false)
                }
            }}
            />

            {isEditing ? (
                <input 
                    value={editText}
                    onChange={(e) =>setEditText(e.target.value)} 
                    onKeyDown={(e) => {
                        if (e.key === "Enter"){
                            editTaskHandler(task.id, editText)
                            setIsEditing(false)
                        }
                    }}
                    onBlur={()=>{
                        if(editText.trim()!== task.text){
                            editTaskHandler(task.id, editText)
                        }
                        setIsEditing(false)
                    }}
                />
            ) : (
            <span onClick={() => setIsEditing(true)}
                style={{
                    textDecoration: task.completed ? "line-through" : "none"
                }}>
                {task.text}
            </span>
    )}
            <button onClick={() => deleteTask(task.id)}>
                🗑
            </button>
        </li>
    )
})

export default TaskItem