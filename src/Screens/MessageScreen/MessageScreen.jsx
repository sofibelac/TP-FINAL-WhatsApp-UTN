import React, { useEffect, useState } from 'react'
import './MessageScreen.css'
import MessageList from '../../Components/MessageList/MessageList'
import SideBar from '../../Components/SideBar/SideBar'
import NavigationMenu from '../../Components/NavigationMenu/NavigationMenu'
import { getContactById } from '../../Services/contactService'
import { useParams } from 'react-router-dom'
import MessageForm from '../../Components/MessageForm/MessageForm'
import ChatHeader from '../../Components/ChatHeader/ChatHeader'

const MessageScreen = () => {
  const { id_contacto } = useParams()
  const contact = getContactById(Number(id_contacto))

  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true) // nuevo estado para cargar

  useEffect(() => {
    if (!contact) return

    setMessages([])        // limpiar mensajes anteriores
    setLoading(true)       // mostrar "cargando"

    const timer = setTimeout(() => {
      setMessages(contact.messages)
      setLoading(false)    // mensajes cargados
    }, 800)

    return () => clearTimeout(timer)
  }, [id_contacto, contact])

  // Crear el nuevo mensaje
  const handleSendMessage = (messageText) => {
    const newMessage = {
      id: Date.now(),
      content: messageText,
      author: 'Yo',
      timestamp: new Date().toLocaleTimeString('es-AR', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      messageStatus: 'sent'
  }

  // Agregar al estado
  setMessages(prevMessages => [...prevMessages, newMessage])
  }

  return (
    <div className='messagescreen'>
      <NavigationMenu />
      <SideBar />

      <div className='messagescreen__main'>
        <div className='messagescreen__top'>
          <ChatHeader
            name={contact.name}
            profileImg={contact.profileImg}
            isOnline={contact.isOnline}
            lastSeen={contact.lastSeen}
            type={contact.type}
            participants={contact.participants}
          />
          {
            loading 
            ? <span className='loading-chat'>Cargando mensajes...</span>
            : <MessageList 
              messages={messages}
              participants={contact.participants} 
              type={contact.type}
              />
          }
          
        </div>
        <MessageForm onSendMessage={handleSendMessage}/>
      </div>
    </div>
  )
}

export default MessageScreen