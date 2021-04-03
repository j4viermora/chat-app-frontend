import React, { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";
import { ChatContext } from "../context/chat/ChatContext";
import { IncomingMessages } from "./IncomingMessages";
import { OutGoinMessages } from "./OutGoinMessages";
import { SendMesaage } from "./SendMesaage";

export const Messages = () => {
 
 
  const { chatState } = useContext( ChatContext );
  const { auth } = useContext( AuthContext );
  const { mensajes } = chatState;

  return (
    <div>
      <div className="mesgs">

        <div className="msg_history">
            {
              mensajes.map( mensaje => (   
                ( mensaje.to === auth.uid )
                ? <IncomingMessages key={ mensaje._id } msg={ mensaje }/>
                : <OutGoinMessages  key={ mensaje._id } msg={ mensaje }/>
              ))
            } 
        </div>
            <SendMesaage />
      </div>
    </div>
  );
};
