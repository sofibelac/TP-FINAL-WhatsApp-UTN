import React from 'react'
import './ChatHeader.css'
import { useNavigate } from 'react-router-dom'


const ChatHeader = ({name, profileImg, isOnline, lastSeen, type, participants}) => {
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate ('/')
  }

  const renderHeaderInfo = () =>{
    // si es un grupo:
    if (type === 'group') {

      const participantsNames = participants
      .map(participant => participant.name)
      .join(', ')
      // mostrar info de participantes
      return (
      <span className='chat-header__sub-info'>
          {participantsNames}, Tú.
        </span>
      ) 
    } else { // sino mostrar en linea o ult vez
      return (
      <span className='chat-header__sub-info'>
          {isOnline ? 'En línea' : `Ult. vez a las ${lastSeen}`}
      </span>
      )
    }
  }

  return (
    <div className='chat-header'>
      <div className='chat-header__info__container'>
        <button 
          className='btn-icon' 
          aria-label='Volver'
          onClick={handleGoBack}
          >
            <i className="bi bi-arrow-left"></i>
        </button>
        <img src={profileImg} 
        alt={name}
        className='chat-header__avatar'
        />

        <div className='chat-header__info'>
          <h3 className='chat-header__user'>{name}</h3>
          {renderHeaderInfo()}
        </div>
      </div>

      <div className='chat-header__actions'>
        <button className='btn-icon' aria-label='Llamar'>
          <i className='bi bi-telephone'></i>
        </button>
        <button className='btn-icon' aria-label='Más opciones'>
          <i className='bi bi-three-dots-vertical'></i>
        </button>
      </div>

    </div>
  )
}

export default ChatHeader