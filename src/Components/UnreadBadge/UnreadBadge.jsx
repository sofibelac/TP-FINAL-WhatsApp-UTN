import React from 'react'
import './UnreadBadge.css'
const UnreadBadge = ({count}) => {

  if (!count || count === '0') return null

  const displayCount = count > 99 ? '99+' : count
  
  return (
    <span className='unread-badge'>
      {displayCount}
    </span>
  )
}

export default UnreadBadge