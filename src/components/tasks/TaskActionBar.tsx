import { useTasksContext } from "../../context/TasksContext";

function TaskActionBar(){
    const{
        tasks,
        clearCompleted,
        markAllCompleted,
        unmarkAllCompleted
    }=useTasksContext()


const hasCompleted = tasks.some(task => task.completed)
const hasPending = tasks.some(task => !task.completed)
    const buttonStyle ={
        padding: "8px 12px",
        borderRadius:"8px"        
    }

return(


    <div style={{display: "flex",
        gap: "8px",
        marginBottom: "12px",
    }}>
    <button
    onClick={clearCompleted}
    disabled={!hasCompleted}
    style={buttonStyle}
    >
        Clear completed
    </button>

  <button
    onClick={markAllCompleted}
    disabled={!hasPending}
    style={buttonStyle}
    >
        Mark all completed
    </button>

    <button
    onClick={unmarkAllCompleted}
    disabled={!hasCompleted}
    style={buttonStyle}
    >
        Unmark all completed
    </button>   

    </div>
)

}
export default TaskActionBar
