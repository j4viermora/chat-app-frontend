import React from 'react'
import { hourMonth } from '../helpers/hourMonth'

export const OutGoinMessages = ({ msg }) => {
  
  const fecha = hourMonth( msg.createdAt );

  return (
          <div className="outgoing_msg">
            <div className="sent_msg">
              <p>{ msg.message }</p>
              <span className="time_date">{ fecha }</span>
            </div>
          </div>
    )
}
