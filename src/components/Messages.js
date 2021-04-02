import React from "react";
import { IncomingMessages } from "./IncomingMessages";
import { OutGoinMessages } from "./OutGoinMessages";
import { SendMesaage } from "./SendMesaage";

export const Messages = () => {
  return (
    <div>
      <div className="mesgs">
        <div className="msg_history">
            <IncomingMessages/>
            <OutGoinMessages />
        </div>
            <SendMesaage />
      </div>
    </div>
  );
};
