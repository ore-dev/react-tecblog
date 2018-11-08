import React from 'react';
import './Video.css'

  const Video = (props) => {
    if(!props.video){
      return (
        <div className = "video col-md-7">
          検索結果がありません。
        </div>
      );
    }

    const videoURL = 'https://www.youtube.com/embed/' + props.video.id.videoId;

    return (
     <div className="video col-md-7">
      <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src={videoURL}
        title="selectedVideo"
      />
      </div>
      <div className="info">
      <h2 className="mt-2 font-weight-bold">{props.video.snippet.title}</h2>
      <p>{props.video.snippet.description}</p>
      </div>
     </div>
  );
}

export default Video;
