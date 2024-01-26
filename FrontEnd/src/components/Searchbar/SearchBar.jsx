// SearchBar.js
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css';

const SearchBar = ({ toggleSearchVisibility }) => {
  return (
    <div className="search-bar">
      <div className='search_search_icone'>
        <div>
            <span><SearchIcon/></span>
        </div>
        <div>
            <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className='Search_close'>
        <button onClick={toggleSearchVisibility}><CloseIcon /></button>
      </div>
    </div>
  );
};

export default SearchBar;
