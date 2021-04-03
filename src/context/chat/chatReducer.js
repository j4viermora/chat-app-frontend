import { types } from "../../types/types";


export const chatReducer = ( state, action ) => {

    switch (action.type) {
        
        case types.cargarUsuarios:
            return {
                ...state,
                usuarios: action.payload
                // o
                // usuarios: [ ...action.payload ]
            }
        case types.activeChat:
            return{
                ...state,
                chatActivo: action.payload
            }
        
        default:
            return state;
    }

}