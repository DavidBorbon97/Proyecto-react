export type Task = {
    id: string
    text: string
    completed: boolean
}

export type TaskAction =
| {
    type: "DELETE_TASK"
    payload: string
}
|{
    type: "TOGGLE_TASK"
    payload: string
}
|{
    type: "ADD_TASK"
    payload: string
}
|{
    type: "EDIT_TASK"
    payload: {
        id: string
        newText: string
    }
}
|{
    type: "CLEAR_COMPLETED"
}
|{
    type: "MARK_ALL_COMPLETED"
}
|{
    type: "UNMARK_ALL_COMPLETED"
}