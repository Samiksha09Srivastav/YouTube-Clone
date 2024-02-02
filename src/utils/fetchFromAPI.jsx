import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '0ca6b66408mshe139f08d283169dp1a16f7jsn4179b64069ce',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  }catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error to handle it elsewhere
  }
}