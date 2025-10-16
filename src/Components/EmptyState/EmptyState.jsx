import React from 'react'
import './EmptyState.css'
const EmptyState = () => {
  return (
    <div className='empty-state'>
      <div className='empty-state__content'>
        <div className='empty-state__icon'>
          <i className='bi bi-chat-dots'></i>
        </div>
        
        <h2 className='empty-state__title'>WhatsApp Web</h2>
        
        <p className='empty-state__text'>
          Selecciona un chat para comenzar a conversar
        </p>
        
      </div>
    </div>
  )
}

export default EmptyState