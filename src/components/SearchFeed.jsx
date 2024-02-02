import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

//components
import {fetchFromAPI} from '../utils/fetchFromAPI.jsx'
import { Videos } from './index.js';

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchFor } = useParams();
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchFor}`)
    .then(( data ) => setVideos(data.items))
  }, [searchFor]);

  return (
    <Box p={2} minHeight='95vh'>
      <Typography variant='subtitle1' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
        Search results for: <span style={{color: '#F31503'}} >{ searchFor }</span> videos
      </Typography>
      <Box display='flex'>
        {<Videos videos={videos} /> }
      </Box>
    </Box>
  );
}

export default SearchFeed;
