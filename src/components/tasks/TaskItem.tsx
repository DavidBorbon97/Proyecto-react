import type {Task} from "../../types/task"
import { useState } from "react"

type Props ={
    task: Task
    onDeleteTask: (id: string) => void
    onToggleTask: (id: string) => void
    onEditTask: (id: string, text: string) => void
}

function TaskItem({ task, onDeleteTask, onToggleTask, onEditTask }: Props)
{
    const[editText, setEditText] = useState(task.text)
    const[isEditing, setIsEditing] = useState(false)
    return(
        <li>
            <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTask(task.id)}
            onKeyDown={(e) =>{
                if (e.key === "Enter"){
                    onEditTask(task.id, editText)
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
                            onEditTask(task.id, editText)
                            setIsEditing(false)
                        }
                    }}
                    onBlur={()=>{
                        if(editText.trim()!== task.text){
                            onEditTask(task.id, editText)
                        }
                        setIsEditing(false)
                    }}
                />
            ) : (
            <span onClick={() => setIsEditing(true)}
                style={{
                    textDecoration: task.completed ? "line-though" : "none"
                }}>
                {task.text}
            </span>
    )}
            <button onClick={() => onDeleteTask(task.id)}>
                🗑
            </button>
        </li>
    )
}

export default TaskItem