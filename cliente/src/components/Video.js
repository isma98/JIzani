import React from 'react';

import './styles/video.scss';

export default function Video(props){

    var srcVideo = props.srcVideo;
    var titleVideo = props.titleVideo;

    return(
        <div className="container-video">
            <span>{titleVideo}</span>    
            <video 
                className="video" 
                src={srcVideo} 
                controls="controls">
            </video>
        </div>
    )

}