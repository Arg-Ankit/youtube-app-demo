import React from 'react';
import Spinner from './Spinner';

const VieoDetail = ({video}) =>{
    if(!video){
        return <Spinner message="Youtube is loading..."/>
    }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div>
            <div className="ui embed">
                <iframe title="videoPlayer" src={videoSrc} />

            </div>
          <div className="ui segment">
            <h4 className="ui header">
              {video.snippet.title}
            </h4>
            <p>{video.snippet.description}</p>            
          </div>
        </div>
    )
}

export default VieoDetail