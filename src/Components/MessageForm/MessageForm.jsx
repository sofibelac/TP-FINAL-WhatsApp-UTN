import React, { useState } from 'react'
import './MessageForm.css'

const MessageForm = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    if (inputText.trim() === ''){
      return
    }
    onSendMessage(inputText);
    setInputText('');
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='message-form'>
      <div className='message-form__container'>
        <div className='message-form__actions'>
          <button
          type='button'
          className='btn-icon'
          aria-label='Emojis'
          >
            <i className='bi bi-emoji-smile'></i>
          </button>
          <button
            type='button'
            className='btn-icon'
            aria-label='Adjuntar'
          >
            <i className='bi bi-paperclip'></i>
          </button>
        </div>

        <input
          type='text'
          value={inputText}
          onChange={handleInputChange}
          placeholder='Escribe un nuevo mensaje aqui'
          className='message-form__input'
        />
      </div>
      <button 
        type='submit' 
        className='btn-icon message-form__button'
        aria-label='Enviar mensaje'
      >
        <i className='bi bi-send-fill'></i>
      </button>
    </form>
  )
}

export default MessageForm