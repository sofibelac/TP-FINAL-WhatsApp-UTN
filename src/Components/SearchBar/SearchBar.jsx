import React from 'react'
import './SearchBar.css'
const SearchBar = ({placeholder}) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className='search' role='search' onSubmit={handleSubmit}>
      <label htmlFor='search-input' className='search-label'>
        <i className='bi bi-search search-icon'></i>
      </label>
      <input 
        id='search-input'
        className='search-input' 
        name='search' 
        type='search' 
        placeholder={placeholder}
      />
    </form>
  )
}

export default SearchBar