import { createTask, editTask, removeTask,toggleTaskStatus,clearCompletedTasks} from "./task.service";
import type{Task,TaskAction}from"../types/task"

export function taskReducer(state: Task[], action: TaskAction){

    switch (action.type){
        
        case"DELETE_TASK":
            return removeTask(state, action.payload)

        case"TOGGLE_TASK":
            return toggleTaskStatus(state, action.payload)

        case"ADD_TASK":
            const newTask = createTask(action.payload)
            return [...state,newTask]

        case "EDIT_TASK":
            return editTask(state, action.payload.id, action.payload.newText)

        case "CLEAR_COMPLETED":
            return clearCompletedTasks(state)
        
        default:
            return state
    }
}