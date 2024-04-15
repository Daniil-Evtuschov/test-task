export interface InitialStateInt{
    icon:any[]
}

export interface ActionsTypInt{
    type: string;
    payload?:any;
}


const initialState:InitialStateInt = {
    icon:[]
}

export const apiReducer = (state: InitialStateInt = initialState, action: ActionsTypInt): InitialStateInt=>{
    switch (action.type) {
        case "GET_ICON":
            return{...state,icon:action.payload}
    default:
        return state
    }
}

export default apiReducer
