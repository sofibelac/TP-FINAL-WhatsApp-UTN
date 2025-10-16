import React from 'react'
import './UserHeader.css'
const UserHeader = () => {
  return (
    <div className='header'>
      <span className='t-header'>Chats</span>
      <div className='header_actions'>
        <button className='btn-icon'>
          <i className='bi bi-plus-circle'></i>
        </button>
        <button className='btn-icon'>
          <i className='bi bi-three-dots-vertical'></i>
        </button>
      </div>
    </div>
  )
}

export default UserHeader