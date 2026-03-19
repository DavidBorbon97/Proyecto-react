import type { Task } from"../types/task"
import TaskItem from "./TaskItem"

type Props = {
    tasks: Task[]
    onDeleteTask: (id: string)=> void
    onToggleTask: (id: string)=> void
    onEditTask: (id: string, text: string)=> void
}

function TaskList({ tasks, onDeleteTask, onToggleTask,onEditTask }: Props){

    if (tasks.length === 0){
        return <p>No task yet</p>
    }
    return(
        <ul>
        {tasks.map((task) =>(
            <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            onEditTask={onEditTask}
            />
        ))}
        </ul>
    )
}
export default TaskList