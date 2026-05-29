import {useState} from "react"

type Props = {
    onAddTask: (text: string)=> void
}

function AddTaskForm({onAddTask}: Props){

    console.log("AddTaskForm render")

    const [text, setText] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (text.trim()=== "")return

        onAddTask(text)
        setText("")
    }
    return(
        <form onSubmit={handleSubmit}>
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