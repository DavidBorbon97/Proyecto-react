import AddTaskForm from "./components/AddTaskForm"
import TaskList from "./components/TaskList"

function App(){
    return(
        <>
            <h1>Task Manager</h1>
            <AddTaskForm />
            <TaskList />
        </>
    )
}

export default App