import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [ searchFor, setSearchFor ] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchFor) {
      navigate(`/search/${searchFor}`)
      
      setSearchFor('');
    }
    
  }

  return (
    <Paper
      onSubmit={handleSubmit}
      component='form'
      sx={{
        borderRadius: 20,
        border: '1px solid e3e3e3',
        pl: 2,
        mr: {sm: 5},
        boxShadow: 'none'
      }}
    >
      <input 
        placeholder='Search'
        className="search-bar"
        value= {searchFor}
        onChange={(e) => setSearchFor(e.target.value)}
      />
      <IconButton type='submit' sx={{color: 'red', p: '10px'}}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
