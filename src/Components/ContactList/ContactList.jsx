import React, { useState } from 'react'
import ContactItem from '../ContactItem/ContactItem'
import './ContactList.css'
import { getAllContacts } from '../../Services/contactService'

const ContactList = () => {
  const contacts = getAllContacts()

  const contact_list_jsx = contacts.map (
    (contact) => {
      return <ContactItem
        key={contact.id} {...contact}
      />
    }
  )

  return (
    <div className='contactList'>
        {contact_list_jsx}
    </div>
  )
}

export default ContactList