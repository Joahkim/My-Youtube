import React from "react";
import "./videoItem.scss";

const VideoItem = ({ video: { snippet } }) => {
  const imageUrl = snippet.thumbnails.medium.url;
  const videoTitle = snippet.title;
  const videoChannel = snippet.channelTitle;
  return (
    <li className="container">
      <div className="video">
        <img className="thumbnail" src={imageUrl} alt="thumbnails of Videos" />
        <div className="metaInfo">
          <p className="title">{videoTitle}</p>
          <p className="channel">{videoChannel}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
