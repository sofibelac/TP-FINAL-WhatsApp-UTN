import React from 'react'
import './MessageBubble.css'
import MessageStatus from '../MessageStatus/MessageStatus'
import { getContactsByType } from '../../Services/contactService'


const MessageBubble = ({
  content, timestamp, author, messageStatus, type, participants = []
}) => {

  const IsGroup = type === 'group'
  const isAuthor = author === 'Yo'

  const getAuthorColor = () => {
    if (!IsGroup) return '#FFFFFF' // cuando no es grupo
    const participant = participants.find(p => p.name === author)
    return participant  ? participant.color : '#FFFFFF' 
  }

  return (
    <div className={`message__container ${ isAuthor ? 'message__container---me' : ''}`}>
      <div className={`message__bubble ${isAuthor ? 'message__bubble---me' : ''}`}>
        <span className='message_author' style={{color: getAuthorColor()}}>{author}</span>
        <div className='message__bottom'>
          <p className='message__content'>{content}</p>
          <span className='message__timestamp'>
            <p>{timestamp}</p>
            <MessageStatus status={messageStatus}/>
          </span>
        </div>
      </div>
    </div>
  )
}

export default MessageBubble