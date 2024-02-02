import {BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';


//components
import { NavBar ,Feed ,VideoDetail , SearchFeed, ChannelDetail } from './components';


import './index.css'

function App() {
  
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <NavBar /> 
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video/:id'  element={<VideoDetail />} />
          <Route path='/channel/:id'  element={<ChannelDetail />} />
          <Route path='/search/:searchFor'  element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
