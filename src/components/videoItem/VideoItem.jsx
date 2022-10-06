import React, { memo } from "react";
import "./videoItem.scss";

const VideoItem = memo(
  ({ video, video: { snippet }, selectVideo, display }) => {
    const imageUrl = snippet.thumbnails.medium.url;
    const videoTitle = snippet.title;
    const videoChannel = snippet.channelTitle;

    const displayType = display === "oneLine" ? "oneLine" : "twoLines";

    return (
      <li
        className={`container ${displayType}`}
        onClick={() => selectVideo(video)}
      >
        <div className="video">
          <img
            className="thumbnail"
            src={imageUrl}
            alt="thumbnails of Videos"
          />
          <div className="metaInfo">
            <p className="title">{videoTitle}</p>
            <p className="channel">{videoChannel}</p>
          </div>
        </div>
      </li>
    );
  }
);

export default VideoItem;
