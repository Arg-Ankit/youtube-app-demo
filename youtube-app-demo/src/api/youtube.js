import axios from 'axios';

const KEY = 'AIzaSyAGcYM3nGmObWjARRS7IeEZ_icvzSC712A';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 100,
    key: KEY
  }
});

