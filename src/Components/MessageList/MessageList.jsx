import React from 'react'
import './MessageList.css'
import MessageBubble from '../MessageBubble/MessageBubble'

const MessageList = ({messages, participants = [], type}) => {

  const list_messages = messages.map(
    (message) => {
      return(
        <div key={message.id} className='message-list'>
          <MessageBubble
            author={message.author}
            timestamp={message.timestamp}
            content={message.content}
            messageStatus={message.messageStatus}
            participants={participants}
            type={type}
          />
        </div>
      )
    }
  )

  return (
    <div className='message-list__container'>
      {list_messages}
    </div>
  )
}

export default MessageList