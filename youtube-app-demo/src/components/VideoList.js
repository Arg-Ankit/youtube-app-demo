import React from 'react';
import VideoItem from './VideoItem';

//Instead of props using videos because we can desctructure
const VideoList  = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) =>{
        return <VideoItem 
                 key={video.id.videoId} 
                 onVideoSelect={onVideoSelect} 
                 video={video}
                />
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList