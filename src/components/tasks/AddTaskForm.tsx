import {useState} from "react"
import { useTasksContext } from "../../context/TasksContext"


function AddTaskForm(){

    console.log("AddTaskForm render")

    const {addTask} = useTasksContext()

    const [text, setText] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (text.trim()=== "")return

        addTask(text)
        setText("")
    }
    return(
        <form onSubmit={handleSubmit}
        style={{
            display: "flex",
            gap: "10px",
            marginBottom: "15px"
        }}>
            <input
            type="text"
            placeholder="write a task..."
            value={text}
            onChange={(e)=> setText(e.target.value)}
            />

            <button type="submit">
             Add
            </button>
        
        </form>
    )
}

export default AddTaskForm