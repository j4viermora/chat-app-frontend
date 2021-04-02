import { createContext, useContext, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket'
import { AuthContext } from '../auth/AuthContext'

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { auth } = useContext( AuthContext );
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



    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}
