import React from 'react'
import UserHeader from '../UserHeader/UserHeader'
import SearchBar from '../SearchBar/SearchBar'
import ContactList from '../ContactList/ContactList'
import './SideBar.css'

const SideBar = () => {

  return (
    <div className='sidebar'>
        <UserHeader/>
        <div className='search-bar'>
          <SearchBar
          placeholder={'Buscar o iniciar un chat'}
          />
        </div>
        <ContactList/>
    </div>
  )
}

export default SideBar