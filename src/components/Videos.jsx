import { Stack , Box} from '@mui/material';

import { VideoCard, ChannelCard} from './';

const Videos = ( { videos, direction }) => {
  if (!videos) {
    // Handle case when videos is undefined
    return <p style={{color: 'white'}}>Loading....</p>;
  }
  
  return (
    <Stack direction={ direction || "row"} flexWrap='wrap' gap={1} justifyContent='space-evenly' >
      {videos.map((item, idx) => (
        <Box key={idx} >
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack >
  );
}

export default Videos;
