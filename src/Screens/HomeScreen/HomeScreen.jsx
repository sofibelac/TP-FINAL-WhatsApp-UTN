import React from 'react'
import SideBar from '../../Components/SideBar/SideBar'
import NavigationMenu from '../../Components/NavigationMenu/NavigationMenu'
import './HomeScreen.css'
import EmptyState from '../../Components/EmptyState/EmptyState'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
      <NavigationMenu />
      <SideBar />
      <main className='homescreen__main'>
        <EmptyState/>
      </main>
    </div>
  )
}

export default HomeScreen