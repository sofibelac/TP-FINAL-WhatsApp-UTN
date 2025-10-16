import React from 'react'
import './ContactItem.css'
import UnreadBadge from '../UnreadBadge/UnreadBadge'
import MessageStatus from '../MessageStatus/MessageStatus'
import { NavLink } from 'react-router-dom'

const ContactItem = ({id, name, lastMessage, timestamp, profileImg, unreadCount, messageStatus
}) => {
  return (
    <NavLink to={`/contacto/${id}`}
    className={({ isActive }) => 
    `contact-item ${isActive ? 'contact-item--active' : ''}`
    }>
      <img src={profileImg} alt={name} className='contact-item__avatar'/>
       <div className='contact-item__content'>
          <div className='contact-item__header'>
              <h3 className='contact-item__name'>{name}</h3>
              <span className='contact-item__timestamp'>{timestamp}</span>
          </div>
          <div className='contact-item__footer'>
              <div className='contact-item__message-container'> 
                <MessageStatus status={messageStatus}/>
                <p className={`contact-item__message ${unreadCount > 0 ? 'contact-item__message--unread' : ''}`}>
                  {lastMessage} 
                </p>
              </div>
              <UnreadBadge count={unreadCount}/>
          </div>
       </div>
    </NavLink>
  )
}

export default ContactItem

      