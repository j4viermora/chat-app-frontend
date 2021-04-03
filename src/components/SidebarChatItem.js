import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { types } from "../types/types";

export const SidebarChatItem = ({ name, online, uid }) => {

  const { dispatch } = useContext( ChatContext )

  const chatActive = () => {

    dispatch( { 
      type: types.activeChat,
      payload: uid
    } )

  };
  
  return (
      <div 
      onClick={ chatActive }
      className="chat_list active_chat">
        <div className="chat_people">
          <div className="chat_img">
            <img
              src="https://ptetutorials.com/images/user-profile.png"
              alt="sunil"
            />
          </div>
          <div className="chat_ib">
            <h5>{ name }</h5>
            {
              ( online )
                ? <span className="text-success">Online</span>  
                : <span className="text-danger">Offline</span>
            }
          </div>
        </div>
      </div>

  );
};
