import { useState } from "react"
import AddTaskForm from "./components/AddTaskForm.tsx"
import TaskList from "./components/TaskList.tsx"
import {useTasks} from "./hooks/useTasks.ts"


function App(){

    const {tasks, addTask, deleteTask, toggleTask, clearCompleted, editTask} = useTasks()

    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

    const filteredTasks = tasks.filter((task)=>{

        if (filter === "active")
            return !task.completed

        if (filter === "completed")
            return task.completed
        return true
    })

    const remainingTasks = tasks.filter(task => !task.completed).length

    return(
        <div    >
            <h1>Task Manager</h1>

            <AddTaskForm onAddTask={addTask}/>

            <div style={{margin: "10px 0"}}>
                <button
                onClick={()=> setFilter("all")}
                style={{fontWeight: filter === "all"?"bold":"normal"}}>
                    All
                </button>

                <button 
                onClick={()=> setFilter("active")}
                style={{fontWeight: filter === "active"? "bold" : "normal"}}>
                    Active
                </button>

                <button 
                onClick={()=> setFilter("completed")}
                style={{fontWeight: filter === "completed" ? "bold": "normal"}}>
                    Completed
                </button>

                {tasks.some(task => task.completed) && (
                <button onClick={clearCompleted}>
                    Clear completed
                </button>
                )}
            </div>

            <p>{remainingTasks} tasks remaining</p>

            <TaskList 
            tasks={filteredTasks}
            onDeleteTask={deleteTask}
            onToggleTask={toggleTask}
            onEditTask={editTask}
            />
        </div>
    )
}
export default App

