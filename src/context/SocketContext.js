import { createContext, useContext, useEffect } from 'react';

import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from './chat/ChatContext';
import { useSocket } from '../hooks/useSocket'

import { types } from '../types/types';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { auth } = useContext( AuthContext );
    const { dispatch } = useContext( ChatContext );


    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:8080');
    
    useEffect( function(){

        if( auth.logged ){
            connectSocket();
        }

    },[ auth, connectSocket ] )

    useEffect( function(){

        if( !auth.logged ){
            disconnectSocket();
        }

    },[ auth , disconnectSocket ] )

    // Escuchar los cambios en los usuarios conectados

    useEffect( function(){

        socket?.on( 'lista-usuario', ( users ) => {
           dispatch( {
               type: types.cargarUsuarios,
               payload: users
           } )
        });
    }, [ socket, dispatch ] );

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}
