import React from "react";
import VideoItem from "../videoItem/VideoItem";
import "./videoList.scss";

const VideoList = ({ videos, selectVideo, display }) => {
  return (
    <ul className="videos">
      {videos.map((video) => (
        <VideoItem
          video={video}
          key={video.id}
          selectVideo={selectVideo}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
