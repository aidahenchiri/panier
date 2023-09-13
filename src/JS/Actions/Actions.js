import { ADD_PANIER, ADD_PRODUCT, DELETE_PRODUCT, DISPONIBLE_PRODUCT, MIN, PLUS } from "../ActionTypes/ActionsTypes"

export const addProduct=(newProduct)=>{
    return{
        type:ADD_PRODUCT,
        payload:newProduct
    }
}

export const deleteProduct=(id)=>{
    return{
        type:DELETE_PRODUCT,
        payload:id
    }
}
export const disponibleProduct=(id)=>{
    return{
        type:DISPONIBLE_PRODUCT,
        payload:id
    }
}

export const  plus=(id)=>{
    return{
        type:PLUS,
        payload:id
    }
}

export const  min=(id)=>{
    return{
        type:MIN,
        payload:id
    }
}



export const addPanier =(id)=>{
return{
    type:ADD_PANIER,
    payload:id
}

}