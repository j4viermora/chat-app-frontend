import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { types } from "../types/types";

export const SearchBox = () => {
  
  const { auth, logout } = useContext( AuthContext );
  const { dispatch }     = useContext( ChatContext )

  const handleLogout = () => {
        logout();
        dispatch({
          type : types.cerrarSesion
        })
  };

  return (
    
      <div className="headind_srch">
        <div className="recent_heading mt-2">
          <h4>{ auth.name }</h4>
        </div>
        <div className="srch_bar">
          <div className="stylish-input-group">
            <button 
            className="btn text-danger"
            onClick={ handleLogout }
            >Salir</button>
          </div>
        </div>
      </div>
  
  );
};
