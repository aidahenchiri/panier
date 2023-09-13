import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ActionsTypes"

export const addtask=(NewTask)=>{
    return{
        type:ADD_TASK,
        payload:NewTask

    }
}
export const deletetask=(id)=>{
    return{
        type:DELETE_TASK,
        payload:id

    }
}
export const donetask=(id)=>{
    return{
        type:DONE_TASK,
        payload:id

    }
}
export const edittask=(id,NewName)=>{
    return{
        type:EDIT_TASK,
        payload:{id,NewName}

    }
}