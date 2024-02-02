import { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

//components
import {fetchFromAPI} from '../utils/fetchFromAPI.jsx'
import { SideBar, Videos } from './index.js';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState(null);
  
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then(( data ) => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{flexDirection: {sx: "column" , md: "row"}}} minHeight='95vh' >
     
      <Box sx={{height: { sx: 'auto', md: "92vh"}, borderRight: "1px solid #3d3d3d", px: {sx: 0, md: 2}}} >

        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className='copyright' variant='body2' sx={{color: "#fff" ,mt: 1 }}>
          Copyright Samiksha 2024
        </Typography>
      </Box> 
      
      <Box p={2} sx={{ overFlowY: 'auto', minHeight: '95vh', flex: 2 }} >
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
          {selectedCategory} <span style={{color: '#F31503'}} >videos</span>
        </Typography>

        <Videos videos={videos} /> 
      
      </Box>
    </Stack>
  );
}

export default Feed;
