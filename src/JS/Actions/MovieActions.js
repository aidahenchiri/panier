import { ADD_MOVIE, DELETE_MOVIE } from "../ActionTypes/ActionsTypes"

export const addmovie=(newmovie)=>{
    return{
        type:ADD_MOVIE,
        payload:newmovie
    }
}

export const deletemovie=(id)=>{
    return{
        type:DELETE_MOVIE,
        payload:id
    }
}