import { useState } from "react"
import AddTaskForm from "./components/tasks/AddTaskForm.tsx"
import TaskList from "./components/tasks/TaskList.tsx"
import { useTasksContext } from "./context/TasksContext.tsx"
import TaskActionBar from "./components/tasks/TaskActionBar.tsx"

function App(){
    
    const {tasks} = useTasksContext()

    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")

    const filteredTasks = tasks.filter((task)=>{

        if (filter === "active")
            return !task.completed

        if (filter === "completed")
            return task.completed
        return true
    })

    const remainingTasks = tasks.filter(task => !task.completed).length
    const completedTasks = tasks.filter(task => task.completed).length

    const totalTasks = tasks.length


    return(
        <div    >
            <h1
                style={{
                    textAlign: "center"
                }}
            >
                Task Manager
            </h1>

            <AddTaskForm />

                <div style={
{                    display: "flex",
                    gap: "10px",
                    marginBottom:"15px"
                }}
                >
                    <button
                        onClick={() => setFilter("all")}
                        style={{
                            padding: "8px 12px",
                            borderRadius:"8px",
                            fontWeight: filter === "all"? "bold" : "normal",
                            backgroundColor: filter === "all" ? "#e5e7eb":"white"
                        }}
                    >
                        All
                    </button>

                    <button
                        onClick={() => setFilter("active")}
                        style={{
                            padding: "8px 12px",
                            borderRadius:"8px",
                            fontWeight: filter === "active" ? "bold" : "normal",
                            backgroundColor: filter === "active" ? "#e5e7eb":"white"
                        }}
                    >
                        Active
                    </button>

                    <button
                        onClick={() => setFilter("completed")}
                        style={{
                            padding: "8px 12px",
                            borderRadius:"8px",
                            fontWeight: filter === "completed" ? "bold" : "normal",
                            backgroundColor: filter === "completed" ? "#e5e7eb":"white"
                        }}
                    >
                        Completed
                    </button>
                </div>

            <TaskActionBar />

<p  
   style={{
        textAlign: "center",
        margin: "15px 0",
        fontWeight: "bold"
    }}
>

    {remainingTasks} pending • {completedTasks} completed • {totalTasks} total
</p>

            <TaskList tasks={filteredTasks}/>
        </div>
    )
}
export default App

