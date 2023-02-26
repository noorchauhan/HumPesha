import React from 'react'
import "./Searchbar.css"
import SearchIcon from '@mui/icons-material/Search';

function Searchbar() {
  return (
    <div className='search'>
        <SearchIcon className='searchicon'/>
        <input type="text"  />
    </div>
  )
}

export default Searchbar