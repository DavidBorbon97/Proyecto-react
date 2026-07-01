import { useState } from "react"
import AddTaskForm from "./components/tasks/AddTaskForm.tsx"
import TaskList from "./components/tasks/TaskList.tsx"
import { useTasksContext } from "./context/TasksContext.tsx"
import TaskActionBar from "./components/tasks/TaskActionBar.tsx"
import { useThemeContext } from "./context/ThemeContext.tsx"
import "./App.css"

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
                backgroundColor: darkMode ? "#111827" : "white",
                color: darkMode ? "white" : "black",
                minHeight: "100vh"
            }}
        >

            <div className="app-container">

            <h1 className="app-title">
                Task Manager
            </h1>

            <AddTaskForm />

            <input
            className="search-input"
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

                <div className="filter-container">
                    <button
                        className={
                            filter === "all"
                            ?"filter-button active"
                            :"filter-button"
                        }
                        onClick={() => setFilter("all")}
                    >
                        All
                    </button>

                    <button
                        className={
                            filter === "active"
                            ?"filter-button active"
                            :"filter-button"
                        }  
                        onClick={() => setFilter("active")}
                    >
                        Active
                    </button>

                    <button
                        className={
                            filter === "completed"
                            ?"filter-button active"
                            :"filter-button"
                        }   
                        onClick={() => setFilter("completed")}
                    >
                        Completed
                    </button>
                </div>

                <button
                className="theme-button"
                onClick={()=> setDarkMode(!darkMode)}
                >
                  {darkMode? "Light Mode":"Dark Mode"}
                </button>

            <TaskActionBar />

            <p>
                Progress: {progress}%
            </p>
            <div className="progress-container">
                    <div
                    className="progress-fill"
                    style={{
                        width: `$(progress)%`
                    }}
                    />
                </div>

<p className="tasks-summary">

    {remainingTasks} pending • {completedTasks} completed • {totalTasks} total
</p>
    <TaskList tasks={filteredTasks}/>
    </div>
</div>
    )
}
export default App

