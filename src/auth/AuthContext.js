import React, { createContext, useCallback, useState } from "react";
import { fetchToken, simpleFetch } from "../helpers/feth";


export const AuthContext = createContext();

const initialState = {

        uid: null,
        cheacking: false ,
        logged : null,
        name: null,
        email: null

};



export const AuthProvider = ( { children } ) => {
    
    const [ auth, setAuth ] = useState( initialState );
    
    //LOGIN

    const login = async( email, password )  => {

        const data ={
           email,
           password
        }
        
        try {
            const resp = await simpleFetch( 'login', data , 'POST' )
                       
             if( resp.status ){
                 
             localStorage.setItem( 'token', resp.token )
             const { uid, name , email } = resp.usuarioDB;
     
             setAuth({
                 uid: uid,
                 cheacking: false,
                 logged : true,
                 name: name,
                 email: email
              })
            }
     
            return resp.status
            
        } catch (err) {
            console.log(err)
        }

    };

    //REGISTER

    const register = async ( name, email, password ) =>{

        const resp = await simpleFetch( 'login/new', { name, email, password }, 'POST' )

        if( resp.status ){
            const { email, name, uid } = resp.usuario;
            localStorage.setItem( 'token', resp.token );

            setAuth({
                uid : uid,
                cheacking: false,
                logged: true,
                name: name,
                email: email
            })
        }
        return resp.status
    };

    const verificarToken = useCallback( async () =>{

        const token = localStorage.getItem( 'token' );

        if( !token ){
           setAuth({
                cheacking: false,
                logged : false,
            })

            return false;
        }
        const resp = await fetchToken( 'login/renew' );

        if( resp.status ){
           
            localStorage.setItem( 'token', resp.token );      
            const { email, name, uid } = resp.usuario;
            setAuth({
                uid : uid,
                cheacking: false,
                logged: true,
                name: name,
                email: email
            })
            return true;
        }else{
            setAuth({
                cheacking: false ,
                logged: false,
            });
            return false;
        }
    }, [] );

    const logout = () => {

        setAuth({
            logged: false
        });

    };
  
    return (
        <AuthContext.Provider value={{ 
            login,
            register,
            verificarToken,
            logout,
            auth
         }}>
            { children }
        </AuthContext.Provider>
    
        
    )
}
