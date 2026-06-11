import { useState } from "react"
import AddTaskForm from "./components/tasks/AddTaskForm.tsx"
import TaskList from "./components/tasks/TaskList.tsx"
import { useTasksContext } from "./context/TasksContext.tsx"
import TaskActionBar from "./components/tasks/TaskActionBar.tsx"
import { useThemeContext } from "./context/ThemeContext.tsx"

function App(){
    
    const {tasks} = useTasksContext()
    const {darkMode, setDarkMode} = useThemeContext()

    const [filter, setFilter] = useState<"all" | "active" | "completed">("all")
    const [search, setSearch] = useState("")
    const filteredTasks = tasks.filter((task)=>{

        const matchesSearch =
            task.text.toLowerCase().includes(search.toLowerCase())

        if (filter === "active")
            return !task.completed && matchesSearch

        if (filter === "completed")
            return task.completed && matchesSearch
        return matchesSearch
    })

    const remainingTasks = tasks.filter(task => !task.completed).length
    const completedTasks = tasks.filter(task => task.completed).length

    const totalTasks = tasks.length

    const progress =
        totalTasks === 0
            ?0
            : Math.round((completedTasks/ totalTasks)* 100)

    return(
        <div
        style={{
            maxWidth: "800px",
            margin: "0 auto",
            minHeight: "100vh",
            padding: "20px",
            backgroundColor: darkMode ? "#111827":"white",
            color: darkMode ? "white" : "black"
        }}
            >
            <h1
                style={{
                    textAlign: "center",
                }}
            >
                Task Manager
            </h1>

            <AddTaskForm />

            <input
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
                width: "100%",
                padding: "8px",
                marginBottom: "15px",
                borderRadius: "8px"
            }}
            />

                <div style={{                    display: "flex",
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

                <button
                onClick={()=> setDarkMode(!darkMode)}
                style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    marginBottom: "15px"
                }}
                >
                  {darkMode? "Light Mode":"Dark Mode"}
                </button>

            <TaskActionBar />

            <p>
                Progress: {progress}%
            </p>
            <div
                style={{
                    width: "100%",
                    height: "20px",
                    backgroundColor: "#d1d5db",
                    borderRadius: "10px",
                    overflow: "hidden",
                    marginBottom: "15px"
                }}
                >
                    <div
                    style={{
                        width: `${progress}%`,
                        height: "100",
                        backgroundColor: "#22c55e"
                    }}
                    />
                </div>

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

