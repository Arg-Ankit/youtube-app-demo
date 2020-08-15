import {useState, useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = ({defaultDearchTerm}) => {
  const [ videos, setVideos] = useState([]);
  
  useEffect(()=> {
    search(defaultDearchTerm);
  },[defaultDearchTerm])
  
  const search = async (term) => {
    const response = await youtube.get('/search',{
        params:{
            q:term
        }
    })
    setVideos(response.data.items);
  }
  
  return [videos, search];

}

export default useVideos