import type { Task } from "../../types/task"
import TaskItem from "./TaskItem"

type Props ={
    tasks: Task[]
}

function TaskList({tasks}: Props){
    console.log("TaskList render")
    
    if (tasks.length === 0){
        return <p>No task yet</p>
    }
    return(
        <ul>
        {tasks.map((task) =>(
            <TaskItem
            key={task.id}
            task={task}
            />
        ))}
        </ul>
    )
}
export default TaskList