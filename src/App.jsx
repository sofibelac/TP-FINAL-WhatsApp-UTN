import React from 'react'
import MessageScreen from './Screens/MessageScreen/MessageScreen'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import './styles/global.css'

function App() {
  return(
    <div className='app'>
      <Routes> 
        <Route
          path='/' 
          element={<HomeScreen/>}
        />
        <Route 
          path='/contacto/:id_contacto' 
          element={<MessageScreen/>}
        />
      </Routes>
    </div>
  )
}

export default App