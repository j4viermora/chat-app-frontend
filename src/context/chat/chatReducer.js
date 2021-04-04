import { types } from "../../types/types";


export const chatReducer = ( state, action ) => {

    switch (action.type) {
        
        case types.cerrarSesion:
            return{
                uid: null,
                cheacking: true ,
                logged : false,
                name: null,
                email: null
            }

        case types.cargarUsuarios:
            return {
                ...state,
                usuarios: action.payload
                // o
                // usuarios: [ ...action.payload ]
            }
        case types.activeChat:         
            if( state.chatActivo === action.payload ) return state
            return{
                ...state,
                chatActivo: action.payload,
                mensajes: []
            }
        case types.cargarMensajes:
            if( state.chatActivo === action.payload.from ||
                state.chatActivo === action.payload.to
                ){
                return{
                    ...state,
                    mensajes: [ ...state.mensajes, action.payload ]
                }
            }else{
                return state
            }
        case types.traerUltimosMsg:
            return{
                ...state,
                mensajes: [ ...action.payload ]
            }
        
        default:
            return state;
    }

}