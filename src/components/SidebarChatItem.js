import React, { useContext } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchToken } from "../helpers/feth";
import { scrollAlFinal } from "../helpers/scrollAlFinal";
import { types } from "../types/types";

export const SidebarChatItem = ({ name, online, uid }) => {

  const { chatState ,dispatch } = useContext( ChatContext )

  const chatActive = async() => {

    dispatch( { 
      type: types.activeChat,
      payload: uid
    } )
    //cargar los mensajes de chat
    const resp =await fetchToken(`messages/${uid}`);

    dispatch({
        type: types.traerUltimosMsg,
        payload: resp.last30
    });

    scrollAlFinal( 'mensajes' )

  };
  
  return (
      <div 
      onClick={ chatActive }
      className={ `chat_list ${( chatState.chatActivo === uid ) && 'active_chat' }`}>
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
