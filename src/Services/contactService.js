import contacts from '../data/contactsData';

export function getAllContacts (){
    return contacts
}

// Obtener un contacto por ID
export function getContactById(id) {
  return contacts.find(contact => contact.id === id)
}

// Filtrar por contacto o grupo
export const getContactsByType = (type) => {
  return contacts.filter(contact => contact.type === type)
}