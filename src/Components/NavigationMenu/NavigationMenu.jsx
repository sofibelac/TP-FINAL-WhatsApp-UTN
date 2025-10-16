import React from 'react'
import './NavigationMenu.css'

const NavigationMenu = () => {
  return (
    <div className='navMenu'>
        <div className='navMenu__top'>
            <button className='btn-icon' aria-label='Menu'>
                <i className='bi bi-list'></i>
            </button>
            <button className='btn-icon btn-icons--active' aria-label='Chats'>
                <i className='bi bi-chat-left-text-fill'></i>
            </button>
            <button className='btn-icon' aria-label='Llamadas'>
                <i className="bi bi-telephone"></i>
            </button>
            <button className='btn-icon' aria-label='Estados'>
                <i className='bi bi-record-circle'></i>
            </button>
        </div>
        <div className='navMenu__bottom'>
            <span>
                <button className='btn-icon' aria-label='Favs'>
                    <i className='bi bi-star'></i>
                </button>
                <button className='btn-icon' aria-label='Archivados'>
                    <i className='bi bi-archive'></i>
                </button>
            </span>
            <span>
                <button className='btn-icon' aria-label='Ajustes'>
                    <i className='bi bi-gear'></i>
                </button>
                <img src='https://images.unsplash.com/photo-1639619628924-eced0acbab4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=883'>
                </img>
            </span>
        </div>
    </div>
  )
}

export default NavigationMenu